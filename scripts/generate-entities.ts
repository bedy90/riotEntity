import { Project, InterfaceDeclaration, PropertySignature, TypeAliasDeclaration, ClassDeclaration } from 'ts-morph';
import * as glob from "glob";
import * as fs from "fs-extra";
import * as path from "path";
import './logger';
import { logType } from './logger';
import { InterfaceData } from './entities/interfaceData';

export enum ImportTypes {
  GLOBAL = 0,
  CUSTOM = 1,
}

export enum NamespaceIndexTypes {
  INTERFACE = 0,
  ENTITY = 1,
  VALIDATOR = 2
}

export class Generator {
  project: Project;
  namespaceVersions: { [key: string]: { [key: string]: string[] } };
  entitiesData: { [key: string]: { [key: string]: InterfaceData } }

  constructor() {
    this.project = new Project();
    this.namespaceVersions = {};
    this.entitiesData = {};
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
  #extractJsDocInfoByDeclaration(iface: InterfaceDeclaration | TypeAliasDeclaration | ClassDeclaration): { namespace?: any, version?: any, name?: any, NotImplemented: boolean } {
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

  // /**
  //  * Fonction pour extraire les types personnalisés des propriétés d'une interface
  //  * @param properties 
  //  * @returns 
  //  */
  // #getCustomAndGlobalTypes(properties: PropertySignature[]): { customTypes: Set<string>, globalTypes: Set<string> } {
  //   const customTypes = new Set<string>();
  //   const globalTypes = new Set<string>();

  //   properties.forEach(property => {
  //     const propType = property.getTypeNode()?.getText() || '';
  //     const matches = propType.match(/\b[A-Z][a-zA-Z0-9_]*\b/g);

  //     if (matches) {
  //       matches.forEach(type => {
  //         // Exclure les types contenant « Interfaces » ainsi que les types primitifs et globaux
  //         if (!propType.includes('Interfaces.') && !['string', 'number', 'boolean', 'any', 'undefined', 'null', 'void', 'never', 'object', 'unknown', 'map'].includes(type.toLowerCase())) {
  //           // Split customType and globalTypes
  //           if (type.toLowerCase().includes("_global")) {
  //             globalTypes.add(type);
  //           } else {
  //             customTypes.add(type);
  //           }
  //         }
  //       });
  //     }
  //   });

  //   return { customTypes, globalTypes };
  // }

  /**
   * Generate JDOC header for classContent
   */
  #generateClassHeader(className: string, namespace: string, version: string, name: string): string {
    let header: string = '';

    header += `\n/**\n`
    header += ` * Class ${className}\n`
    header += ` *\n`
    header += ` * @namespace ${namespace}\n`
    header += ` * @version ${version}\n`
    header += ` * @name ${name}\n`
    header += ` */`

    return header;
  }

  // /**
  //  * Generate all imports from types list
  //  * @param types 
  //  * @param importType 
  //  * @returns 
  //  */
  // #generateImport(types: Set<string>, importType: ImportTypes): string {
  //   let imports: string = '';

  //   if (types && types.size > 0) {
  //     switch (importType) {
  //       case ImportTypes.CUSTOM:
  //         imports += `import { ${[...types].join(', ')} } from '@/riotentity';\n`;
  //         break;

  //       case ImportTypes.GLOBAL:
  //         types.forEach(globalType => {
  //           const globalImportPath = `@/src/interface/_Global/${globalType}`;
  //           imports += `import { ${globalType} } from '${globalImportPath}';\n`;
  //         });
  //         break;
  //     }
  //   }

  //   return imports;
  // }

  // /**
  //  * Generate all properties
  //  * @param properties 
  //  * @returns 
  //  */
  // #generateProperties(properties: PropertySignature[]): string {
  //   let classContent: string = '';

  //   if (properties && properties.length > 0) {
  //     properties.forEach((property: PropertySignature) => {
  //       const propName = property.getName();
  //       const propType = property.getTypeNode()?.getText() || 'any';

  //       classContent += `    ${propName}!: ${propType};\n`;
  //     });
  //   }
  //   return classContent;
  // }

  #writeFile(basePath: string, orignalFilePath: string, fileName: string, fileContent: string): void {
    // Déterminer le chemin de sortie
    // basePath = "src/interface"
    // path.relative("src/interface", orignalFilePath);

    const relativePath = path.relative(basePath, orignalFilePath);
    const outputPath = path.join("generate", "entity", relativePath);
    const outputDir = path.dirname(outputPath);
    const outputFile = path.join(outputDir, `${fileName}.ts`);

    // Créer le répertoire de sortie si nécessaire
    fs.ensureDirSync(outputDir);

    // Écrire le fichier de classe
    fs.writeFileSync(outputFile, fileContent);
  }

  #addNamespace(namespace: string, version: string, interfaceName: string): void {
    // Ajouter l'interface à la structure namespaceVersions, si elle n'existe pas
    if (!this.namespaceVersions[namespace]) {
      this.namespaceVersions[namespace] = {};
    }

    // Ajouter la version dans le namespaceVersions, si elle n'existe pas
    if (!this.namespaceVersions[namespace][version]) {
      this.namespaceVersions[namespace][version] = [];
    }

    // Ajouter l'interface
    this.namespaceVersions[namespace][version].push(interfaceName);
  }

  #addEntities(namespace: string, version: string, data: InterfaceData): void {
    if (data) {
      if (!this.entitiesData[namespace]) {
        this.entitiesData[namespace] = {};
      }

      // Ajouter la version dans le namespaceVersions, si elle n'existe pas
      if (!this.entitiesData[namespace][version]) {
        this.entitiesData[namespace][version] = data;
      }
    }
  }

  // ****************************************
  //  Process function
  // ****************************************
  #readAllClasses(classes: ClassDeclaration[], filePath: string, generateFile: boolean = false): void {

    classes.forEach(cls => {
      const className = cls.getName();
      const baseName = cls?.getSourceFile()?.getBaseName() || null;

      if (!baseName || baseName.toLowerCase().includes('index.ts')) {
        return;
      }

      if (className) {
        // Extraire les informations JSDoc
        const { namespace, version, name, NotImplemented } = this.#extractJsDocInfoByDeclaration(cls);
        if (NotImplemented) {
          console.warn(`Class ${className} isn't implemented.`)
          return;
        }

        // Préparation du namespace (index)
        this.#addNamespace(namespace, version, className);
      }
    });
  }

  /**
   * Parcourir les interfaces pour générer les classes
   * @param interfaces 
   * @param filePath 
   */
  #readAllInterface(interfaces: InterfaceDeclaration[], filePath: string, generateFile: boolean = false): void {
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
          console.warn(`Interface ${interfaceName} can't be transformed into a class, as its JDOC is not declared.`)
          return;
        }
        if (NotImplemented) {
          console.warn(`Interface ${interfaceName} isn't implemented.`)
          return;
        }

        // Préparation du namespace (index)
        this.#addNamespace(namespace, version, interfaceName);

        // Prepare interfaceData
        let data: InterfaceData = new InterfaceData(filePath, className, iface);
        data.addHeader(namespace, version, name);
        // data.addProperties(this.#getAllPropertiesByInterfaceDeclaration(iface));
        // // data.addType(this.#getCustomAndGlobalTypes(data.properties));
       
        // data.addImport(`import { Interfaces } from '@/riotentity';`)
        // data.addImportTypes(data.customTypes, ImportTypes.CUSTOM)
        // data.addImportTypes(data.globalTypes, ImportTypes.GLOBAL)
        // // data.addImport(this.#generateImport(data.customTypes, ImportTypes.CUSTOM))
        // // data.addImport(this.#generateImport(data.globalTypes, ImportTypes.GLOBAL))
        data.addJDOC(this.#generateClassHeader(className, namespace, version, name));
        this.#addEntities(namespace, version, data);

        if (generateFile) {
          this.#writeFile( "src/interface", filePath, className, data.classContent());

          console.log(logType.CLASS, `Classes ${className} has been generated from the interface.`)
        }
      } // End if startsWith("I")
    });
  }

  /**
   * Parcours les « types » pour générer les classes
   * @param typeAliases 
   * @param filePath 
   */
  #readAllTypeAliases(typeAliases: TypeAliasDeclaration[], filePath: string, generateFile: boolean = false): void {
    typeAliases.forEach((typeAlias: TypeAliasDeclaration) => {
      const typeName = typeAlias.getName();
      const globalType = typeAlias.getTypeNode()?.getText();

      if ((globalType && globalType.length > 0) && (typeName.startsWith("I") && typeAlias.getTypeNode()?.getText()?.includes("_Global"))) {
        const className = typeName.substring(1);

        // Extraire les informations JSDoc
        const { namespace, version, name, NotImplemented } = this.#extractJsDocInfoByDeclaration(typeAlias);
        if (!namespace || !version || !name) {
          console.warn(`Types ${typeName} can't be transformed into a class, as its JDOC is not declared.`)
          return;
        }
        if (NotImplemented) {
          console.warn(`Types ${typeName} isn't implemented.`)
          return;
        }

        // Préparation du namespace (index)
        this.#addNamespace(namespace, version, typeName);

        const globalInterface: InterfaceDeclaration = this.project.getSourceFileOrThrow(path.join("src/interface/", "_Global/" + globalType + ".ts")).getInterfaceOrThrow(globalType.replace(/<.*>$/, ''));
        // const properties = this.#getAllPropertiesByInterfaceDeclaration(globalInterface);

        // Prepare interfaceData
        let data: InterfaceData = new InterfaceData(filePath, className, globalInterface);
        data.addHeader(namespace, version, name);
        // data.addProperties(properties);
        // // data.addType(this.#getCustomAndGlobalTypes(data.properties));
        
        // data.addImport(`import { Interfaces } from '@/riotentity';`)
        // data.addImportTypes(data.customTypes, ImportTypes.CUSTOM)
        // data.addImportTypes(data.globalTypes, ImportTypes.GLOBAL)
       
        // // data.addImport(this.#generateImport(data.customTypes, ImportTypes.CUSTOM))
        // // data.addImport(this.#generateImport(data.globalTypes, ImportTypes.GLOBAL))
        data.addJDOC(this.#generateClassHeader(className, namespace, version, name));
        this.#addEntities(namespace, version, data);


        if (generateFile) {
          this.#writeFile( "src/interface", filePath, className, data.classContent());

          console.log(logType.CLASS, `Classes ${className} has been generated from the type.`)
        }
      }
    });
  }

  /**
   * Génére l'index.ts des interfaces a partir du namespaceVersions
   */
  #processInterfaceIndexNamespace() {
    // Générer les fichiers index.ts pour chaque namespace et version
    Object.keys(this.namespaceVersions).forEach(namespace => {
      const versions = this.namespaceVersions[namespace];

      Object.keys(versions).forEach(version => {
        const interfaces = versions[version];

        let indexContent = '';
        interfaces.forEach(interfaceName => {
          const importName = interfaceName.substring(1);

          const interfacePath = `./${version}/${interfaceName}`;
          indexContent += `import * as ${importName}Interface from '${interfacePath}';\n`;
        });

        indexContent += `\nexport namespace ${namespace} {\n`;
        indexContent += `  export namespace ${version} {\n`;

        interfaces.forEach(interfaceName => {
          const importName = interfaceName.substring(1);
          indexContent += `    export import ${interfaceName} = ${importName}Interface.${interfaceName};\n`;
        });

        indexContent += `  }\n`;
        indexContent += `}\n`;

        // Déterminer le chemin de sortie
        const outputPath = path.join("generate", "interface", `${namespace}`, 'index.ts');
        const outputDir = path.dirname(outputPath);
        const outputFile = path.join(outputDir, "index.ts");

        // Créer le répertoire de sortie si nécessaire
        fs.ensureDirSync(outputDir);

        // Écrire le fichier index
        fs.writeFileSync(outputPath, indexContent);

        console.log(`[SUCCESS] Interface namespace Index '${outputFile}' has been generated`)
      });
    });
  }

  /**
   * Génére l'index.ts des classes a partir du namespaceVersions
   */
  #processClassIndexNamespace() {
    // Générer les fichiers index.ts pour chaque namespace et version
    Object.keys(this.namespaceVersions).forEach(namespace => {
      const versions = this.namespaceVersions[namespace];

      Object.keys(versions).forEach(version => {
        const classes = versions[version];

        let indexContent = '';
        classes.forEach(className => {
          const importName = className;

          const classPath = `./${version}/${className}`;
          indexContent += `import * as ${importName}Cls from '${classPath}';\n`;
        });

        indexContent += `\nexport namespace ${namespace} {\n`;
        indexContent += `  export namespace ${version} {\n`;

        classes.forEach(className => {
          const importName = className;
          indexContent += `    export import ${className} = ${importName}Cls.${className};\n`;
        });

        indexContent += `  }\n`;
        indexContent += `}\n`;

        // Déterminer le chemin de sortie
        const outputPath = path.join("generate", "entity", `${namespace}`, 'index.ts');
        const outputDir = path.dirname(outputPath);
        const outputFile = path.join(outputDir, "index.ts");

        // Créer le répertoire de sortie si nécessaire
        fs.ensureDirSync(outputDir);

        // Écrire le fichier index
        fs.writeFileSync(outputPath, indexContent);

        console.log(`[SUCCESS] Classes namespace Index '${outputFile}' has been generated`)
      });
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
        this.#readAllInterface(interfaces, filePath, true);
      }

      if (typeAliases && typeAliases.length > 0) {
        this.#readAllTypeAliases(typeAliases, filePath, true);
      }
    });
  }

  processIndexNamespace(filesFolderPath: string = "src/interface/**/*.ts", type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
    // Read all interface files
    const sourceFiles = glob.sync(filesFolderPath);
    this.namespaceVersions = {};

    // Process
    sourceFiles.forEach((filePath: string) => {
      const sourceFile = this.project.addSourceFileAtPath(filePath);
      const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
      const typeAliases: TypeAliasDeclaration[] = sourceFile.getTypeAliases();
      const classes: ClassDeclaration[] = sourceFile.getClasses();

      if (type == NamespaceIndexTypes.INTERFACE) {
        if (interfaces && interfaces.length > 0) {
          this.#readAllInterface(interfaces, filePath, false);
        }

        if (typeAliases && typeAliases.length > 0) {
          this.#readAllTypeAliases(typeAliases, filePath, false);
        }
      }

      if (type == NamespaceIndexTypes.ENTITY) {
        if (classes && classes.length > 0) {
          this.#readAllClasses(classes, filePath, false);
        }
      }

    });

    switch (type) {
      case NamespaceIndexTypes.INTERFACE:
        this.#processInterfaceIndexNamespace();
        break;

      case NamespaceIndexTypes.ENTITY:
        this.#processClassIndexNamespace();
        break;
    }
  }

}

let mainGenerator: Generator = new Generator();
// console.log('Arguments passés:', process.argv.slice(2));

let firstArgs: string = process.argv[2];
switch (firstArgs) {
  case '1':
  case 'entity':
  case 'class':
    console.log(logType.CLASS, `Generate entity classes from interfaces`)
    mainGenerator.processInterfaceToClass();
    console.log(logType.CLASS, `Generation of entity classes from interfaces is now complete`)

    break;

  case '2':
  case 'interfaceIndex':
  case 'intIndex':
    console.log(logType.INDEX, `Generating index interfaces from nain interfaces`)
    mainGenerator.processIndexNamespace("src/interface/**/*.ts", NamespaceIndexTypes.INTERFACE);
    break;

  case '3':
  case 'classIndex':
  case 'clsIndex':
    console.log(logType.INDEX, `Generating index class from main class`)
    mainGenerator.processIndexNamespace("src/entity/**/*.ts", NamespaceIndexTypes.ENTITY);
    break;

  case '4':
  case 'validator':
    console.log(logType.VALIDATOR, `Generating validation classes from interfaces`)
    break;

  default:
    console.log(logType.INFORMATION, `Invalid parameters : "${firstArgs}"`)
    break;
}