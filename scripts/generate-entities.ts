import { Project, InterfaceDeclaration, PropertySignature, TypeAliasDeclaration } from 'ts-morph';
import * as glob from "glob";
import * as fs from "fs-extra";
import * as path from "path";
import { type } from 'os';

export enum ImportTypes {
  GLOBAL = 0,
  CUSTOM = 1,
}

export class Generator {
  project: Project;

  constructor() {
    this.project = new Project();
  }

  /**
   * Fonction pour extraire les propriétés d'une interface, y compris celles héritées
   * @param iface 
   * @returns 
   */
  #getAllPropertiesByInterfaceDeclaration(iface: InterfaceDeclaration): PropertySignature[] {
    const properties: PropertySignature[] = [];

    // Ajouter les propriétés de l'interface actuelle
    properties.push(...iface.getProperties());

    // Parcourir les interfaces héritées
    iface.getExtends().forEach(heritageClause => {
      const extendedInterface = heritageClause.getType().getSymbol()?.getDeclarations()[0] as InterfaceDeclaration;
      if (extendedInterface) {
        properties.push(...this.#getAllPropertiesByInterfaceDeclaration(extendedInterface));
      }
    });

    return properties;
  }

  /**
   * Fonction pour extraire les informations JSDoc d'une interface
   * @param iface 
   * @returns 
   */
  #extractJsDocInfoByDeclaration(iface: InterfaceDeclaration | TypeAliasDeclaration): { namespace?: any, version?: any, name?: any, NotImplemented: boolean } {
    const jsDocTags = iface.getJsDocs().flatMap(doc => doc.getTags());
    const namespaceTag = jsDocTags.find(tag => tag.getTagName() === "namespace");
    const versionTag = jsDocTags.find(tag => tag.getTagName() === "version");
    const nameTag = jsDocTags.find(tag => tag.getTagName() === "name");
    const NotImplementedTag = jsDocTags.find(tag => tag.getTagName() === "NotImplemented");

    const namespace = namespaceTag?.getComment() || null;
    const version = versionTag?.getComment() || null;
    const name = nameTag?.getComment() || null;
    const NotImplemented = (NotImplementedTag != null ? true : false);

    return { namespace, version, name, NotImplemented };
  }

  /**
   * PAS TESTÉ
   * @param iface 
   * @returns 
   */
  #extractJsDocInfo2(iface: InterfaceDeclaration) {
    const jsDoc = iface.getJsDocs()[0]?.getInnerText() || '';
    const namespaceMatch = /@namespace\s+(\S+)/.exec(jsDoc);
    const versionMatch = /@version\s+(\S+)/.exec(jsDoc);
    const nameMatch = /@name\s+(\S+)/.exec(jsDoc);
    const notImplementedMatch = /@NotImplemented\s+(\S+)/.exec(jsDoc);

    return {
      namespace: namespaceMatch ? namespaceMatch[1] : null,
      version: versionMatch ? versionMatch[1] : null,
      name: nameMatch ? nameMatch[1] : null,
      notImplemented: notImplementedMatch ? true : false,
    };
  }

  /**
   * Fonction pour extraire les types personnalisés des propriétés d'une interface
   * @param properties 
   * @returns 
   */
  #getCustomAndGlobalTypes(properties: PropertySignature[]): { customTypes: Set<string>, globalTypes: Set<string> } {
    const customTypes = new Set<string>();
    const globalTypes = new Set<string>();

    properties.forEach(property => {
      const propType = property.getTypeNode()?.getText() || '';
      const matches = propType.match(/\b[A-Z][a-zA-Z0-9_]*\b/g);

      if (matches) {
        matches.forEach(type => {
          // Exclure les types contenant « Interfaces » ainsi que les types primitifs et globaux
          if (!propType.includes('Interfaces.') && !['string', 'number', 'boolean', 'any', 'undefined', 'null', 'void', 'never', 'object', 'unknown', 'map'].includes(type.toLowerCase())) {
            // Split customType and globalTypes
            if (type.toLowerCase().includes("_global")) {
              globalTypes.add(type);
            } else {
              customTypes.add(type);
            }
          }
        });
      }
    });

    return { customTypes, globalTypes };
  }

  /**
   * Generate all imports from types list
   * @param types 
   * @param importType 
   * @returns 
   */
  #generateImport(types: Set<string>, importType: ImportTypes): string {
    let imports: string = '';

    if (types && types.size > 0) {
      switch (importType) {
        case ImportTypes.CUSTOM:
          imports += `import { ${[...types].join(', ')} } from '@/riotentity';\n`;
          break;

        case ImportTypes.GLOBAL:
          types.forEach(globalType => {
            const globalImportPath = `@/src/interface/_Global/${globalType}`;
            imports += `import { ${globalType} } from '${globalImportPath}';\n`;
          });
          break;
      }
    }

    return imports;
  }

  #generateProperties(properties: PropertySignature[]): string {
    let classContent: string = '';

    if (properties && properties.length > 0) {
      properties.forEach((property: PropertySignature) => {
        const propName = property.getName();
        const propType = property.getTypeNode()?.getText() || 'any';

        classContent += `    ${propName}!: ${propType};\n`;
      });
    }
    return classContent;
  }

  #writeFile(filePath: string, className: string, classContent: string): void {
    // Déterminer le chemin de sortie
    const relativePath = path.relative("src/interface", filePath);
    const outputPath = path.join("generate", "entity", relativePath);
    const outputDir = path.dirname(outputPath);
    const outputFile = path.join(outputDir, `${className}.ts`);

    // Créer le répertoire de sortie si nécessaire
    fs.ensureDirSync(outputDir);

    // Écrire le fichier de classe
    fs.writeFileSync(outputFile, classContent);
  }

  // ****************************************
  //  Process function
  // ****************************************
  #processInterface(interfaces: InterfaceDeclaration[], filePath: string) {
    interfaces.forEach((iface: InterfaceDeclaration) => {
      const interfaceName = iface.getName();
      const baseName = iface?.getSourceFile()?.getBaseName() || null;

      if (!baseName || baseName.toLowerCase().includes('index.ts') || baseName.toLowerCase().includes('_global')) {
        return;
      }

      if (interfaceName.startsWith("I")) {
        const className = interfaceName.substring(1);

        // Extraire les informations JSDoc
        // TODO : Move validation on extractJsDocInfoByDeclaration and THROW Exception (required Try..catch)
        const { namespace, version, name, NotImplemented } = this.#extractJsDocInfoByDeclaration(iface);
        if (!namespace || !version || !name) {
          console.warn(`[WARN] Interface ${interfaceName} can't be transformed into a class, as its JDOC is not declared.`)
          return;
        }
        if (NotImplemented) {
          console.warn(`[WARN] Interface ${interfaceName} isn't implemented.`)
          return;
        }

        // Obtenir toutes les propriétés (y compris héritées)
        const properties = this.#getAllPropertiesByInterfaceDeclaration(iface);

        // Obtenir les types personnalisés
        const { customTypes, globalTypes } = this.#getCustomAndGlobalTypes(properties);

        // Générer le contenu de la classe
        let classContent = `import { Interfaces } from '@/riotentity';\n`;
        classContent += this.#generateImport(customTypes, ImportTypes.CUSTOM);
        classContent += this.#generateImport(globalTypes, ImportTypes.GLOBAL);

        // Declare export header
        classContent += `\nexport class ${className} implements Interfaces.${namespace}.${version}.${name} {\n`;

        // Declare properties
        classContent += this.#generateProperties(properties);

        // End class 
        classContent += `}\n`;

        // Déterminer le chemin de sortie
        this.#writeFile(filePath, className, classContent);

        console.log(`[SUCCESS] Class ${className} has been generated from the interface.`)
      } // End if startsWith("I")
    });
  }

  #processTypeAliases(typeAliases: TypeAliasDeclaration[], filePath: string) {
    typeAliases.forEach((typeAlias: TypeAliasDeclaration) => {
      const typeName = typeAlias.getName();
      const globalType = typeAlias.getTypeNode()?.getText();

      if ((globalType && globalType.length > 0) && (typeName.startsWith("I") && typeAlias.getTypeNode()?.getText()?.includes("_Global"))) {
        const className = typeName.substring(1);

        // Extraire les informations JSDoc
        const { namespace, version, name, NotImplemented } = this.#extractJsDocInfoByDeclaration(typeAlias);
        if (!namespace || !version || !name) {
          console.warn(`[WARN] Types ${typeName} can't be transformed into a class, as its JDOC is not declared.`)
          return;
        }
        if (NotImplemented) {
          console.warn(`[WARN] Types ${typeName} isn't implemented.`)
          return;
        }

        // Type est juste un alias, nous devons générer les propriétés de l'interface globale
        const globalInterface = this.project.getSourceFileOrThrow(path.join("src/interface/", "_Global/" + globalType + ".ts")).getInterfaceOrThrow(globalType.replace(/<.*>$/, ''));
        const properties = this.#getAllPropertiesByInterfaceDeclaration(globalInterface);

        // Obtenir les types personnalisés
        const { customTypes, globalTypes } = this.#getCustomAndGlobalTypes(properties);

        // Générer le contenu de la classe
        let classContent = `import { Interfaces } from '@/riotentity';\n`;
        classContent += this.#generateImport(customTypes, ImportTypes.CUSTOM);
        classContent += this.#generateImport(globalTypes, ImportTypes.GLOBAL);

        classContent += `\nexport class ${className} implements Interfaces.${namespace}.${version}.${name} {\n`;

        // Declare properties
        classContent += this.#generateProperties(properties);

        // End class 
        classContent += `}\n`;

        // Déterminer le chemin de sortie
        this.#writeFile(filePath, className, classContent);

        console.log(`[SUCCESS] Class ${className} has been generated from the type.`)
      }
    });
  }

  /**
   * Generate classes from interfaces/types
   */
  processInterfaceToClass() {
    // Read all interface files
    const interfaceFiles = glob.sync("src/interface/**/*.ts");

    // Process
    interfaceFiles.forEach((filePath: string) => {
      const sourceFile = this.project.addSourceFileAtPath(filePath);
      const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
      const typeAliases: TypeAliasDeclaration[] = sourceFile.getTypeAliases();

      if (interfaces && interfaces.length > 0) {
        this.#processInterface(interfaces, filePath);
      }

      if (typeAliases && typeAliases.length > 0) {
        this.#processTypeAliases(typeAliases, filePath);
      }

    });
  }
}

let mainGenerator: Generator = new Generator();
// console.log('Arguments passés:', process.argv.slice(2));

let firstArgs: string = process.argv[2];
switch (firstArgs) {
  case '1':
  case 'entity':
  case 'class':
    console.log('Génération des class a partir des interfaces')
    mainGenerator.processInterfaceToClass();
    break;

  case '2':
  case 'validator':
    console.log('Génération des class a partir des interfaces')
    break;

  default:
    console.log(`Paramètre invalide : "${firstArgs}"`);
    break;
}