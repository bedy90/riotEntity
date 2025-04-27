import { Project, InterfaceDeclaration, PropertySignature, TypeAliasDeclaration, ClassDeclaration, StructureKind, SourceFile } from 'ts-morph';
import * as glob from 'glob';
import * as fs from 'fs-extra';
import * as path from 'path';
import './logger';
import { logType } from './logger';
import { InterfaceData, HeaderInfo } from './entities/interfaceData';
import { NamespaceIndexTypes, ValidationTypes, ImportTypes } from './common';
import { GenerateIndex } from './generate-index';

// //#region Enum
// export enum ImportTypes {
//   GLOBAL = 0,
//   CUSTOM = 1,
// }

// export enum NamespaceIndexTypes {
//   INTERFACE = 0,
//   ENTITY = 1,
//   VALIDATOR = 2
// }

// export enum ValidationTypes {
//   GENERIC = 1,
//   GENERIC_ARRAY = 2,

//   CUSTOM_TYPE = 5,
//   CUSTOM_TYPE_ARRAY = 6,

//   ENUM = 8,
//   ENUM_ARRAY = 9,

//   GLOBAL_TYPE = 12,
//   GLOBAL_TYPE_ARRAY = 13,
// }
// //#endregion


export class Generator {

  project: Project;
  // <[namespace], <[version], [interfaceName]>
  namespaceVersions: Record<string, Record<string, string[]>>;

  // <[namespace], <[version], [InterfaceData]>
  entitiesData: Record<string, Record<string, InterfaceData[]>>;

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
  #extractJsDocInfoByDeclaration(iface: InterfaceDeclaration | TypeAliasDeclaration | ClassDeclaration): HeaderInfo {
    const jsDocTags = iface.getJsDocs().flatMap(doc => doc.getTags());
    const namespaceTag = jsDocTags.find(tag => tag.getTagName() === 'namespace');
    const versionTag = jsDocTags.find(tag => tag.getTagName() === 'version');
    const nameTag = jsDocTags.find(tag => tag.getTagName() === 'name');
    const NotImplementedTag = jsDocTags.find(tag => tag.getTagName() === 'NotImplemented');
    const prefixTag = jsDocTags.find(tag => tag.getTagName() === 'prefix');

    const namespace = namespaceTag?.getComment() || null;
    const version = versionTag?.getComment() || null;
    const name = nameTag?.getComment() || null;
    const NotImplemented = (NotImplementedTag != null ? true : false);
    const prefix = prefixTag?.getComment() || null; // (prefixTag != null ? prefixTag : null);

    return new HeaderInfo(namespace, version, name, prefix, NotImplemented);
  }

  /**
   * Generate JDOC header for classContent
   */
  #generateClassHeader(className: string, namespace: string, version: string, name: string, prefix: string): string {
    let header = '';

    header += '\n/**\n';
    header += ` * Class ${className}\n`;
    header += ' *\n';
    header += ` * @namespace ${namespace}\n`;
    header += ` * @version ${version}\n`;
    header += ` * @name ${name}\n`;
    header += ` * @prefix ${prefix}\n`;
    header += ' */';

    return header;
  }

  #writeFile(basePath: string, orignalFilePath: string, fileName: string, fileContent: string): void {
    // Déterminer le chemin de sortie
    // basePath = "src/interface"
    // path.relative("src/interface", orignalFilePath);

    const relativePath = path.relative(basePath, orignalFilePath);
    const outputPath = path.join('generate', 'entity', relativePath);
    const outputDir = path.dirname(outputPath);
    const outputFile = path.join(outputDir, `${fileName}.ts`);

    // Créer le répertoire de sortie si nécessaire
    fs.ensureDirSync(outputDir);

    // Écrire le fichier de classe
    fs.writeFileSync(outputFile, fileContent);
  }

  /**
   * Grouping interface by namespace
   * @param namespace 
   * @param version 
   * @param interfaceName 
   */
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
        this.entitiesData[namespace][version] = []; // data;
      }

      this.entitiesData[namespace][version].push(data);
    }
  }

  // ****************************************
  //  Process function
  // ****************************************
  #readAllClasses(classes: ClassDeclaration[], filePath: string, generateFile = false): void {

    classes.forEach(cls => {
      const className = cls.getName();
      const baseName = cls?.getSourceFile()?.getBaseName() || null;

      if (!baseName || baseName.toLowerCase().includes('index.ts')) {
        return;
      }

      if (className) {
        // Extraire les informations JSDoc
        // const { namespace, version, name, prefix, NotImplemented } = this.#extractJsDocInfoByDeclaration(cls);
        const jsDocInfo: HeaderInfo = this.#extractJsDocInfoByDeclaration(cls);

        if (jsDocInfo.notImplemented) {
          console.warn(`Class ${className} isn't implemented.`);
          return;
        }

        // Préparation du namespace (index)
        this.#addNamespace(jsDocInfo.namespace, jsDocInfo.version, className);
      }
    });
  }

  /**
   * Parcourir les interfaces pour générer les classes
   * @param interfaces
   * @param filePath
   */
  #readAllInterface(interfaces: InterfaceDeclaration[], filePath: string, generateFile = false, includeGlobal = false): void {
    interfaces.forEach((iface: InterfaceDeclaration) => {
      const interfaceName = iface.getName();
      const baseName = iface?.getSourceFile()?.getBaseName() || null;

      if (!baseName || baseName.toLowerCase().includes('index.ts') || (!includeGlobal && baseName.toLowerCase().includes('_global'))) {
        return;
      }

      if (interfaceName.startsWith('I')) {
        const className = interfaceName.substring(1);
        const newFileName = className.substring(0, className.lastIndexOf("_"));

        // Regex pattern
        /*
        const match = interfaceName.match(/^I(.*)_v\d+$/);
        const newFileName = match ? match[1] : "";
        */

        // Extraire les informations JSDoc
        // TODO : Move validation on extractJsDocInfoByDeclaration and THROW Exception (required Try..catch)
        // const { namespace, version, name, prefix, NotImplemented } = this.#extractJsDocInfoByDeclaration(iface);
        const jsDocInfo: HeaderInfo = this.#extractJsDocInfoByDeclaration(iface);

        // if (!jsDocInfo.namespace || !jsDocInfo.version || !jsDocInfo.name) {
        //   console.warn(`Interface ${interfaceName} can't be transformed into a class, as its JDOC is not declared.`);
        //   return;
        // }
        if (!jsDocInfo.isValid()) {
          console.warn(`Interface ${interfaceName} can't be transformed into a class, as its JDOC is not declared.`);
          return;
        }

        if (jsDocInfo.notImplemented) {
          console.warn(`Interface ${interfaceName} isn't implemented.`);
          return;
        }

        // Préparation du namespace (index)
        this.#addNamespace(jsDocInfo.namespace, jsDocInfo.version, interfaceName);

        // Prepare interfaceData
        const data: InterfaceData = new InterfaceData(filePath, interfaceName, className, iface);
        // data.addHeader(jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix);
        data.addHeader(jsDocInfo);
        data.addJDOC(this.#generateClassHeader(className, jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix));
        this.#addEntities(jsDocInfo.namespace, jsDocInfo.version, data);

        if (generateFile) {
          this.#writeFile('src/interface', filePath, newFileName, data.classContent());

          console.log(logType.CLASS, `Classes ${className} has been generated from the interface.`);
        }
      } // End if startsWith("I")
    });
  }

  /**
   * Parcours les « types » pour générer les classes
   * @param typeAliases
   * @param filePath
   */
  #readAllTypeAliases(typeAliases: TypeAliasDeclaration[], filePath: string, generateFile = false, includeGlobal = false): void {
    typeAliases.forEach((typeAlias: TypeAliasDeclaration) => {
      const typeName = typeAlias.getName();
      const globalType = typeAlias.getTypeNode()?.getText();

      if ((globalType && globalType.length > 0) && (typeName.startsWith('I') && (!includeGlobal && typeAlias.getTypeNode()?.getText()?.includes('_Global')))) {
        const className = typeName.substring(1);
        const newFileName = className.substring(0, className.lastIndexOf("_"));

        // Extraire les informations JSDoc
        // const { namespace, version, name, prefix, NotImplemented } = this.#extractJsDocInfoByDeclaration(typeAlias);
        const jsDocInfo: HeaderInfo = this.#extractJsDocInfoByDeclaration(typeAlias);

        // if (!namespace || !version || !name) {
        //   console.warn(`Types ${typeName} can't be transformed into a class, as its JDOC is not declared.`);
        //   return;
        // }
        if (!jsDocInfo.isValid()) {
          console.warn(`Types ${typeName} can't be transformed into a class, as its JDOC is not declared.`);
          return;
        }
        if (jsDocInfo.notImplemented) {
          console.warn(`Types ${typeName} isn't implemented.`);
          return;
        }

        // Préparation du namespace (index)
        this.#addNamespace(jsDocInfo.namespace, jsDocInfo.version, typeName);

        const globalInterface: InterfaceDeclaration = this.project.getSourceFileOrThrow(path.join('src/interface/', '_Global/' + globalType + '.ts')).getInterfaceOrThrow(globalType.replace(/<.*>$/, ''));
        // const properties = this.#getAllPropertiesByInterfaceDeclaration(globalInterface);

        // Prepare interfaceData
        const data: InterfaceData = new InterfaceData(filePath, typeName, className, globalInterface);
        // data.addHeader(jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix);
        data.addHeader(jsDocInfo);
        data.addJDOC(this.#generateClassHeader(className, jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix));
        this.#addEntities(jsDocInfo.namespace, jsDocInfo.version, data);


        if (generateFile) {
          this.#writeFile('src/interface', filePath, newFileName, data.classContent());

          console.log(logType.CLASS, `Classes ${className} has been generated from the type.`);
        }
      }
    });
  }

  /**
   * Génére l'index.ts des interfaces a partir du namespaceVersions
   */
  #processInterfaceIndexNamespace() {
    // TODO: Load GLOBAL
    Object.keys(this.entitiesData).forEach((namespace: string) => {
      const data: Record<string, InterfaceData[]> = this.entitiesData[namespace];

      Object.keys(data).forEach((version: string) => {
        const interfaces: InterfaceData[] = data[version];
        let arrImports: Record<string, string> = {};

        let fileContent: string = '';

        // Write Import
        interfaces.forEach((intData: InterfaceData) => {
          const interfaceName: string = intData.originalName;

          let alias: string = intData.getExportAlias();
          if (intData.headerInfo?.prefix) {
            fileContent += `import { ${interfaceName} as ${alias} } from '${intData.getExportPath()}';\n`;
          } else {
            fileContent += `import { ${interfaceName} } from '${intData.getExportPath()}';\n`;
            alias = interfaceName; // We don't have a alias, we use interfaceName
          }

          arrImports[intData.getNameWithoutVersion()] = alias;
        });

        // Write Export and prepare Union
        let nbItem: number = 0;
        let arrExportType: string[] = [];

        fileContent += `\nexport {\n`
        Object.entries(arrImports).forEach(([key, value]) => {
          // Add initial tab
          if (nbItem == 0) {
            fileContent += `\t`;
          }

          fileContent += `${value}, `;
          nbItem += 1;

          // Add EOF 
          if (nbItem == 3) {
            fileContent += `\n`;
            nbItem = 0;
          }

          // TODO: Revoir quand il aura du multiversion pour ajouter V1 | V2 | ...
          // TODO : Revoir le pattern pour « key » avec prefix
          arrExportType.push(`\nexport type ${key} = ${value};`);
        });
        fileContent = fileContent.trimEnd();
        fileContent += `\n};\n`;

        // Add export type (Union) 
        arrExportType.forEach(expType => {
          fileContent += `${expType}`;
        });

        // Déterminer le chemin de sortie
        const outputPath = path.join('generate', 'interface', `${namespace}`, 'index.ts');
        const outputDir = path.dirname(outputPath);
        const outputFile = path.join(outputDir, 'index.ts');

        // Créer le répertoire de sortie si nécessaire
        fs.ensureDirSync(outputDir);

        // Écrire le fichier index
        fs.writeFileSync(outputPath, fileContent);

        console.log(`[SUCCESS] Interface namespace Index '${outputFile}' has been generated`);
      });
    });
  }

  // #processInterfaceIndexNamespaceOld() {
  //   // Générer les fichiers index.ts pour chaque namespace et version
  //   Object.keys(this.namespaceVersions).forEach(namespace => {
  //     const versions = this.namespaceVersions[namespace];

  //     Object.keys(versions).forEach(version => {
  //       const interfaces = versions[version];

  //       let arrImports: Record<string, string> = {};
  //       let indexContent: string = '';

  //       // Add Import
  //       interfaces.forEach(interfaceName => {
  //         const importName = interfaceName.substring(1);
  //         const fileName = importName.substring(0, importName.lastIndexOf("_"));

  //         const interfacePath = `./${version}/${fileName}`;
  //         // TODO: Gestion pour savoir si on doit inclure ou pas le namespace dans le nom de alias
  //         //       ou changer le nom pour inclure par défaut
  //         const alias = `${namespace}_${importName}`;

  //         indexContent += `import { ${importName} as ${alias} } from '${interfacePath}';\n`;

  //         arrImports[fileName] = alias;
  //       });

  //       // Add Export and prepare export type
  //       let nbItem: number = 0;
  //       let arrExportType: string[] = [];

  //       indexContent += `\nexport { \n`
  //       Object.entries(arrImports).forEach(([key, value]) => {
  //         // Add initial tab
  //         if (nbItem == 0) {
  //           indexContent += `\t`;
  //         }

  //         indexContent += `${value}, `;
  //         nbItem += 1;

  //         // Add EOF 
  //         if (nbItem == 3) {
  //           indexContent += `\n`;
  //           nbItem = 0;
  //         }

  //         // TODO: Revoir quand il aura du multiversion pour ajouter V1 | V2 | ...
  //         // TODO : Revoir le pattern pour « key » avec prefix
  //         arrExportType.push(`export type ${key} = ${value}`);
  //       });
  //       indexContent += `\n }\n`;

  //       // Add Export type
  //       arrExportType.forEach(expType => {
  //         indexContent += `${expType}\n`;
  //       });


  //       // Déterminer le chemin de sortie
  //       const outputPath = path.join('generate', 'interface', `${namespace}`, 'index.ts');
  //       const outputDir = path.dirname(outputPath);
  //       const outputFile = path.join(outputDir, 'index.ts');

  //       // Créer le répertoire de sortie si nécessaire
  //       fs.ensureDirSync(outputDir);

  //       // Écrire le fichier index
  //       fs.writeFileSync(outputPath, indexContent);

  //       console.log(`[SUCCESS] Interface namespace Index '${outputFile}' has been generated`);
  //     });
  //   });
  // }

  /**
   * Génére l'index.ts des classes a partir du namespaceVersions
   * TODO: Appliquer le même process que interface
   */
  #processClassIndexNamespace() {
    // Générer les fichiers index.ts pour chaque namespace et version
    Object.keys(this.namespaceVersions).forEach(namespace => {
      const versions = this.namespaceVersions[namespace];

      Object.keys(versions).forEach(version => {
        const classes = versions[version];

        let arrImports: Record<string, string> = {};
        let indexContent = '';

        classes.forEach(className => {
          const importName = className;
          const fileName = importName.substring(0, importName.lastIndexOf("_"));

          const classPath = `./${version}/${fileName}`;
          // TODO: Gestion pour savoir si on doit inclure ou pas le namespace dans le nom de alias
          //       ou changer le nom pour inclure par défaut
          const alias = `${namespace}_${importName}`;

          indexContent += `import { ${importName} as ${alias} } from '${classPath}';\n`;

          arrImports[fileName] = alias;

          // indexContent += `import * as ${importName}Cls from '${classPath}';\n`;
        });

        // Add Export and prepare export type
        let nbItem: number = 0;
        let arrExportType: string[] = [];

        indexContent += `\nexport { \n`
        Object.entries(arrImports).forEach(([key, value]) => {
          // Add initial tab
          if (nbItem == 0) {
            indexContent += `\t`;
          }

          indexContent += `${value}, `;
          nbItem += 1;

          // Add EOF 
          if (nbItem == 3) {
            indexContent += `\n`;
            nbItem = 0;
          }

          // TODO: Revoir quand il aura du multiversion pour ajouter V1 | V2 | ...
          // TODO : Revoir le pattern pour « key » avec prefix
          arrExportType.push(`export type ${key} = ${value}`)
        });
        indexContent += `\n }\n`;

        // Add Export type
        arrExportType.forEach(expType => {
          indexContent += `${expType}\n`;
        });


        // Déterminer le chemin de sortie
        const outputPath = path.join('generate', 'entity', `${namespace}`, 'index.ts');
        const outputDir = path.dirname(outputPath);
        const outputFile = path.join(outputDir, 'index.ts');

        // Créer le répertoire de sortie si nécessaire
        fs.ensureDirSync(outputDir);

        // Écrire le fichier index
        fs.writeFileSync(outputPath, indexContent);

        console.log(`[SUCCESS] Classes namespace Index '${outputFile}' has been generated`);
      });
    });

  }

  /**
   * Generate classes from interfaces/types
   */
  processInterfaceToClass() {
    // Read all interface files
    const interfaceFiles = glob.sync('src/interface/**/*.ts');

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

  /**
   * Generate Index files from interfaces or classes
   * @param filesFolderPath 
   * @param type 
   */
  processIndexNamespace(filesFolderPath = 'src/interface/**/*.ts', type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
    // Read all interface files
    const sourceFiles = glob.sync(filesFolderPath);
    this.namespaceVersions = {};

    // Process
    sourceFiles.forEach((filePath: string) => {
      const fileName = path.basename(filePath);
      if (fileName.toLowerCase() == "index.ts") {
        return;
      }

      const sourceFile = this.project.addSourceFileAtPath(filePath);
      const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
      const typeAliases: TypeAliasDeclaration[] = sourceFile.getTypeAliases();
      const classes: ClassDeclaration[] = sourceFile.getClasses(); // Only true if NamespaceIndexTypes = ENTITY (CLASSES)

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

    let generator : GenerateIndex = new GenerateIndex(this.entitiesData);
    generator.processIndexNamespace(type);

    // switch (type) {
    //   case NamespaceIndexTypes.INTERFACE:
    //     this.#processInterfaceIndexNamespace();
    //     break;

    //   case NamespaceIndexTypes.ENTITY:
    //     this.#processClassIndexNamespace();
    //     break;
    // }
  }

  // Not used
  test(filesFolderPath = 'src/interface/**/*.ts', type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
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
          this.#readAllInterface(interfaces, filePath, false, true);
        }

        if (typeAliases && typeAliases.length > 0) {
          this.#readAllTypeAliases(typeAliases, filePath, false, true);
        }
      }

    });

    // TODO: Load GLOBAL
    Object.keys(this.entitiesData).forEach(namespace => {
      const versions = this.entitiesData[namespace];

      Object.keys(versions).forEach(version => {
        const interfaces: InterfaceData[] = versions[version];

        interfaces.forEach((data: InterfaceData) => {
          // const data: InterfaceData = versions[version];
          this.generateValidationFunction(data);
        });
      });
    });
  }

  // TODO: Incomplete
  generateValidationFunction(data: InterfaceData): string {
    if (data) {
      const interfaceName = data.originalName;
      const namespace = data.headerInfo?.namespace;
      const version = data.headerInfo?.version;
      const properties = data.properties.map((property: PropertySignature) => `${property.getName()}: ${property.getTypeNode()?.getText()}`);
      // entitiesData: { [key: string]: { [key: string]: InterfaceData[] } }

      // Est-ce que ça serait mieux d'Avoir : TYPE - ValidationTypes au lieu de seulement ValidationTypes
      const propertiesValidation: Map<string, {
        propName: string,
        propType: string,
        propTypes?: string[],
        varType: ValidationTypes,
        isArray: boolean,
        subValidation?: string
      }> = new Map<string, {
        propName: string,
        propType: string,
        varType: ValidationTypes,
        isArray: boolean,
        subValidation?: string
      }>();
      // let arrHasTypes: string[] = [];

      /*
        name: string          => type 1 : valider le type
        lstName: string[]     => type 2 : Array.isArray
        summoner: ISummoner   => type 3 : Call validator

        ENUM :
         entityDTO.publish_locations.every((location) =>
          typeof location === 'string' &&
          (location === PublishLocations.RIOT_CLIENT ||
            location === PublishLocations.RIOT_STATUS ||
            location === PublishLocations.GAME)
        ) &&

        MAP
             entityDTO.thresholds instanceof Map &&
            [...entityDTO.thresholds.keys()].every((key) =>
              typeof key === 'string'
            ) &&
            [...entityDTO.thresholds.values()].every((value) =>
              typeof value === 'number'
            );
      */

      // import { Interfaces, Validator } from '@/riotentity';
      const imports: string[] = ['Interfaces'];

      // import { ClashPosition, ClashRole } from '@/src/declaration';
      const declarationImport: string[] = [];

      data.properties.forEach((property: PropertySignature) => {
        const propertyName: string = property.getName();
        const propertyType: string = property.getTypeNode()?.getText() || '';
        const matches = propertyType.match(/\b[A-Z][a-zA-Z0-9_]*\b/g);

        if (matches) {
          matches.forEach(type => {
            const typeLowerCase: string = propertyType.toLowerCase(); // type.toLowerCase();
            const multiType: boolean = propertyType.includes('|');
            const typeArray: string[] = (multiType ?
              propertyType.split(' | ').flatMap(part => part.replace(/\[\]\s*/, ''))
              : []); // propertyType.replace('[]', '').split('|') : []);
            const isArray: boolean = propertyType.includes('[]');

            // Traitement des cas de bases
            if (['string', 'number', 'boolean', 'any', 'undefined', 'null', 'void', 'never', 'object', 'unknown', 'map'].includes(typeLowerCase)) {
              propertiesValidation.set(propertyName, {
                propName: propertyName,
                propType: (!multiType ? propertyType : typeArray[0].trim()),
                propTypes: (multiType ? typeArray : undefined),
                isArray: isArray,
                varType: (isArray ? ValidationTypes.GENERIC_ARRAY : ValidationTypes.GENERIC),
                // isArray: (['array', '[]'].includes(typeLowerCase) ? true : false),
                // varType: (['array', '[]'].includes(typeLowerCase) ? ValidationTypes.GENERIC_ARRAY : ValidationTypes.GENERIC)
              });
            }
            // else if (['array', '[]'].includes(type.toLowerCase())) {
            //   propertiesValidation.set(propertyName, {
            //     propName: propertyName,
            //     propType: propertyType.replace('[]', ''),
            //     varType: ValidationTypes.ARRAY
            //   });
            // }
            else if (propertyType.toLowerCase().includes('_global')) {
              // test
              // let splitData = propertyType.split('.');
              // splitData[0] = 'Validator';
              // splitData[3] = `is${splitData[3]}`
              // let validatorName: string = splitData.join('.').replace('[]', '');

              const validatorName: string = `Validator.Global.v1.is${propertyType}`.replace('[]', '');
              // test

              propertiesValidation.set(propertyName, {
                propName: propertyName,
                propType: (!multiType ? propertyType : typeArray[0]),
                propTypes: (multiType ? typeArray : undefined),
                isArray: isArray,
                varType: (isArray ? ValidationTypes.GLOBAL_TYPE_ARRAY : ValidationTypes.GLOBAL_TYPE),
                subValidation: validatorName,
                // isArray: (['array', '[]'].includes(typeLowerCase) ? true : false),
                // // varType: ValidationTypes.GLOBAL_TYPE
                // varType: (['array', '[]'].includes(typeLowerCase) ? ValidationTypes.GLOBAL_TYPE_ARRAY : ValidationTypes.GLOBAL_TYPE)
              });
              // TODO: Comment obtenir la route ?
            } else if (propertyType.toLowerCase().includes('interfaces.')) {
              // Ex : Interfaces.TFT_Match.v1.ICompanionDTO
              // Ex : Validator.TFT_Match.v1.isICompanionDTO(accEntity)
              const splitData = propertyType.split('.');
              splitData[0] = 'Validator';
              splitData[3] = `is${splitData[3]}`;
              // let namespace = splitData[1];
              // // let name = splitData[2];
              // let version = splitData[2];
              // let interfaceName = splitData[3];

              // let testAa: string = propertyType.replace('Interface', 'Validator');
              const validatorName: string = splitData.join('.').replace('[]', ''); // `Validators.${version}.${name}.is${interfaceName}`;

              propertiesValidation.set(propertyName, {
                propName: propertyName,
                propType: (!multiType ? propertyType : typeArray[0]),
                propTypes: (multiType ? typeArray : undefined),
                isArray: isArray,
                varType: (isArray ? ValidationTypes.CUSTOM_TYPE_ARRAY : ValidationTypes.CUSTOM_TYPE),
                // isArray: (['array', '[]'].includes(typeLowerCase) ? true : false),
                // // varType: ValidationTypes.CUSTOM_TYPE,
                // varType: (['array', '[]'].includes(typeLowerCase) ? ValidationTypes.CUSTOM_TYPE_ARRAY : ValidationTypes.CUSTOM_TYPE),
                subValidation: validatorName,
              });

              // TODO: Comment obtenir la route ?
              if (!imports.includes('Validator')) {
                imports.push('Validator');
              }

            } else if (['State', 'Tracking', 'KaynChampionTransform', 'ClashPosition', 'ClashRole', 'Level', 'MaintenanceStatus',
              'IncidentSeverity', 'Platforms', 'PublishLocations', 'GameMode', 'GameType', 'QueueType', 'TraitStyle'].includes(type)) {

              propertiesValidation.set(propertyName, {
                propName: propertyName,
                propType: (!multiType ? propertyType : typeArray[0]),
                propTypes: (multiType ? typeArray : undefined),
                isArray: isArray,
                varType: (isArray ? ValidationTypes.ENUM_ARRAY : ValidationTypes.ENUM),
                // isArray: (['array', '[]'].includes(typeLowerCase) ? true : false),
                // // varType: ValidationTypes.ENUM
                // varType: (['array', '[]'].includes(typeLowerCase) ? ValidationTypes.ENUM : ValidationTypes.ENUM_ARRAY)
              });

              if (!declarationImport.includes(type)) {
                declarationImport.push(type);
              }
            } else {
              console.error(`Type ${type} for property ${propertyName} isn't supported.`);
            }
          }); // End matches.forEach;
        } else {
          const typeLowerCase: string = propertyType.toLowerCase(); // type.toLowerCase();
          const multiType: boolean = propertyType.includes('|');
          const typeArray: string[] = (multiType ?
            propertyType.split(' | ').flatMap(part => part.replace(/\[\]\s*/, ''))
            : []); // propertyType.replace('[]', '').split('|') : []);
          const isArray: boolean = propertyType.includes('[]');

          propertiesValidation.set(propertyName, {
            propName: propertyName,
            propType: (!multiType ? propertyType : typeArray[0]),
            propTypes: (multiType ? typeArray : undefined),
            isArray: isArray,
            varType: (isArray ? ValidationTypes.GENERIC_ARRAY : ValidationTypes.GENERIC),
            // subValidation: validatorName
            // isArray: (['array', '[]'].includes(typeLowerCase) ? true : false),
            // // varType: ValidationTypes.GENERIC
            // varType: (['array', '[]'].includes(typeLowerCase) ? ValidationTypes.GENERIC_ARRAY : ValidationTypes.GENERIC)
          });
        }
      }); // End data.properties


      const objName = `${interfaceName.toLowerCase()}`;

      // `import {${[...imports].join(', ')}) from '@/riotentity';
      const importRow: string[] = [];
      importRow.push(`import { ${imports.join(', ')} } from '@/riotentity';`);
      if (declarationImport && declarationImport.length > 0) {
        importRow.push(`import { ${declarationImport.join(', ')} } from '@/declaration';`);
      }
      const headerDeclaration = `\nexport function is${interfaceName}(obj: any): obj is Interfaces.${namespace}.${version}.${interfaceName} {`;
      importRow.push(headerDeclaration);

      // let code: string = importRow.join("\n");

      importRow.push(`  // Validité que le parametre soit initialisé
      if (typeof obj !== 'object' || obj === null) {
        return false;
      }\n`);

      importRow.push(`  // Casting du parametre en obj du typé a validé
      const ${objName} = obj as Interfaces.${namespace}.${version}.${interfaceName};\n`);

      importRow.push(`  // Valider le nombre de properties
      const hasFieldCount: boolean = Object.keys(${objName}).length === ${properties.length};\n`);

      importRow.push(`  // Valider que la variable « obj » contient chacune des propriété ${interfaceName}
      const hasFieldsIn: boolean = ${properties.map(property => `'${property.split(':')[0]}' in ${objName}`).join(' &&\n    ')};\n`);

      // importRow.push(`      // validé le type de chacune des propriétés de ${interfaceName}
      // const hasFieldType: boolean = `);

      const validationRow: string[] = [];
      propertiesValidation.forEach(property => {
        const varName = `${objName}.${property.propName}`;

        switch (property.varType) {
          case ValidationTypes.GENERIC:
          case ValidationTypes.GENERIC_ARRAY:
            if (property.isArray) {
              validationRow.push(`Array.isArray(${varName})`);
              validationRow.push(`(${varName}).every(id => typeof id === '${property.propType}')`);
            } else {
              validationRow.push(`typeof ${varName} === '${property.propType}'`);
            }

            break;

          case ValidationTypes.CUSTOM_TYPE:
          case ValidationTypes.CUSTOM_TYPE_ARRAY:
            // Call custom validator
            if (property.isArray) {
              validationRow.push(`Array.isArray(${varName})`);
              validationRow.push(`(${varName}).every(val => ${property.subValidation}(val))`);

            } else {
              validationRow.push(`${property.subValidation}(${varName})`);
            }
            break;

          case ValidationTypes.ENUM:
          case ValidationTypes.ENUM_ARRAY:
            /*
            (Object.values(ClashPosition).includes(obj.position) ||
                          typeof entityDTO.position === 'string') &&
              */

            // TODO: Gérer le multiple type
            if (property.isArray) {
              validationRow.push(`Array.isArray(${varName})`);
              validationRow.push(`(${varName}).every(val => (typeof val === '${property.propType}') ||
                                                    (Object.values(${property.propType}).includes(val))`);
              // validationRow.push(`(Object.values(${property.propType}).includes(${varName}) || typeof ${varName} === 'string')`)

            } else {
              validationRow.push(`(Object.values(${property.propType}).includes(${varName}) || typeof ${varName} === 'string')`);
            }


            break;

          case ValidationTypes.GLOBAL_TYPE:
          case ValidationTypes.GLOBAL_TYPE_ARRAY:
            // Global Validator or get properties ?
            if (property.isArray) {
              validationRow.push(`Array.isArray(${varName})`);
              validationRow.push(`(${varName}).every(val => ${property.subValidation}(val))`);

            } else {
              validationRow.push(`${property.subValidation}(${varName})`);
            }
            break;

        }
      });
      importRow.push(`  // Valider le type de chacune des propriétés de ${interfaceName}
      const hasFieldType: boolean = (${validationRow.join(' &&\n    ')})\n`);
      // importRow.push(validationRow.join(' &&\t\t\t'));

      importRow.push('  return hasFieldsIn && hasFieldCount && hasFieldType;');
      importRow.push('}');

      const code: string = importRow.join('\n');

      // const validationFunctionCode = `
      //       import { Interfaces } from '@/riotentity';

      //       export function is${interfaceName}(obj: any): obj is Interfaces.${namespace}.${version}.${interfaceName} {
      //           if (typeof obj !== 'object' || obj === null) {
      //               return false;
      //           }

      //           const ${interfaceName.toLowerCase()} = obj as Interfaces.${namespace}.${version}.${interfaceName};

      //           // Valider que la variable « obj » contient chacune des propriété AccountDTO
      //           const hasFieldsIn: boolean = ${properties.map(property => `'${property.split(':')[0]}' in ${interfaceName.toLowerCase()}`).join(' && ')};

      //           // Validité le nombre de propriété
      //           const hasFieldCount: boolean = Object.keys(${interfaceName.toLowerCase()}).length === ${properties.length};

      //           // validité le type de chacune des propriété
      //           const hasFieldType: boolean = ${properties.map(property => {
      //   const propertyName = property.split(':')[0];
      //   const propertyType = property.split(':')[1].trim();
      //   return `typeof ${interfaceName.toLowerCase()}.${propertyName} === '${propertyType}'`;
      // }).join(' && ')};

      //           return hasFieldsIn && hasFieldCount && hasFieldType;
      //       }
      //   `;

      // Déterminer le chemin de sortie
      const outputPath = path.join('generate', 'validator', `${namespace}`, `${version}`, `${interfaceName}Checker.ts`);
      const outputDir = path.dirname(outputPath);
      const outputFile = path.join(outputDir, `${interfaceName}Checker.ts`);

      // Créer le répertoire de sortie si nécessaire
      fs.ensureDirSync(outputDir);

      // Écrire le fichier index
      fs.writeFileSync(outputFile, code);

      // console.log(validationFunctionCode)

      return code; // validationFunctionCode;
    }
    return '';
  }

}


const mainGenerator: Generator = new Generator();
// console.log('Arguments passés:', process.argv.slice(2));

const firstArgs: string = process.argv[2];
switch (firstArgs) {
  case '1':
  case 'entity':
  case 'class':
    console.log(logType.CLASS, 'Generate entity classes from interfaces');
    mainGenerator.processInterfaceToClass();
    console.log(logType.CLASS, 'Generation of entity classes from interfaces is now complete');

    break;

  case '2':
  case 'interfaceIndex':
  case 'intIndex':
    console.log(logType.INDEX, 'Generating index interfaces from main interfaces');
    mainGenerator.processIndexNamespace('src/interface/**/*.ts', NamespaceIndexTypes.INTERFACE);
    break;

  case '3':
  case 'classIndex':
  case 'clsIndex':
    console.log(logType.INDEX, 'Generating index class from main class');
    mainGenerator.processIndexNamespace('src/entity/**/*.ts', NamespaceIndexTypes.ENTITY);
    break;

  case '4':
  case 'validator':
    console.log(logType.VALIDATOR, 'Generating validation classes from interfaces');
    mainGenerator.test('src/interface/**/*.ts', NamespaceIndexTypes.INTERFACE);
    break;

  default:
    console.log(logType.INFORMATION, `Invalid parameters : "${firstArgs}"`);
    break;
}
