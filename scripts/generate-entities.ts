import { Project, InterfaceDeclaration, PropertySignature } from 'ts-morph';
import * as fs from 'fs-extra';
import * as path from 'path';

import './logger';
import { logType } from './logger';

import { InterfaceData } from './entities/interfaceData';
import { NamespaceIndexTypes, ValidationTypes, CommonUtils } from './common';
import { GenerateIndex } from './index/generate-index';
import { InterfaceParser } from './interface-parser';


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

  // ****************************************
  //  Process function
  // ****************************************
  /**
   * Generate classes from interfaces/types
   */
  processInterfaceToClass(filesFolderPath = 'src/interface/**/*.ts', type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
    const parser : InterfaceParser = new InterfaceParser(this.project, this.entitiesData);
    parser.ParseFiles(filesFolderPath, type);

    parser.interfaces.forEach((iface: InterfaceData) => {
      const newFileName = iface.className.substring(0, iface.className.lastIndexOf("_"));

      CommonUtils.writeFile('src/interface', iface.filePath, newFileName, iface.classContent());

      console.log(logType.CLASS, `Classes ${iface.className} has been generated from the interface.`);
    });
  }

  /**
   * Generate Index files from interfaces or classes
   * @param filesFolderPath 
   * @param type 
   */
  processIndexNamespace(filesFolderPath = 'src/interface/**/*.ts', type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
    const parser : InterfaceParser = new InterfaceParser(this.project, this.entitiesData);
    parser.ParseFiles(filesFolderPath, type);

    let generator : GenerateIndex = new GenerateIndex(this.entitiesData);
    generator.processIndexNamespace(type);
  }

  // Not used
  // test(filesFolderPath = 'src/interface/**/*.ts', type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
  //   // Read all interface files
  //   const sourceFiles = glob.sync(filesFolderPath);
  //   this.namespaceVersions = {};

  //   // Process
  //   sourceFiles.forEach((filePath: string) => {
  //     const sourceFile = this.project.addSourceFileAtPath(filePath);
  //     const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
  //     const typeAliases: TypeAliasDeclaration[] = sourceFile.getTypeAliases();
  //     const classes: ClassDeclaration[] = sourceFile.getClasses();

  //     if (type == NamespaceIndexTypes.INTERFACE) {
  //       if (interfaces && interfaces.length > 0) {
  //         this.#readAllInterface(interfaces, filePath, false, true);
  //       }

  //       if (typeAliases && typeAliases.length > 0) {
  //         this.#readAllTypeAliases(typeAliases, filePath, false, true);
  //       }
  //     }

  //   });

  //   // TODO: Load GLOBAL
  //   Object.keys(this.entitiesData).forEach(namespace => {
  //     const versions = this.entitiesData[namespace];

  //     Object.keys(versions).forEach(version => {
  //       const interfaces: InterfaceData[] = versions[version];

  //       interfaces.forEach((data: InterfaceData) => {
  //         // const data: InterfaceData = versions[version];
  //         this.generateValidationFunction(data);
  //       });
  //     });
  //   });
  // }

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
      // const declarationImport: string[] = [];

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

              // import { Declarations } from '@/riotentity';
              if (!imports.includes('Declarations')) {
                imports.push(`Declarations`);
              }

              // if (!declarationImport.includes(type)) {
              //   declarationImport.push(type);
              // }

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

      // TODO: Change pattern
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
      //    import { InterfaceParser } from './interface-parser';

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
    console.log(logType.CLASS, 'Generation of entity classes from main interfaces.');
    console.warn('The process has been deactivated, as it is now obsolete.');
    // mainGenerator.processInterfaceToClass();
    // console.log(logType.CLASS, 'Generation of entity classes from interfaces is now complete');
    break;

  case '2':
  case 'interfaceIndex':
  case 'intIndex':
    console.log(logType.INDEX, 'Generation of interface indexes from main interfaces.');
    mainGenerator.processIndexNamespace('src/interface/**/*.ts', NamespaceIndexTypes.INTERFACE);
    break;

  case '3':
  case 'classIndex':
  case 'clsIndex':
    console.log(logType.INDEX, 'Generation of interface indexes from main classes.');
    console.warn('The process has been deactivated, as it is now obsolete.');
    // TODO: Si on le réactive un jour, il faudrait le réviser. Suite au changements il est possible que la génération
    //      pour le type : `NamespaceIndexTypes.CLASSES` ne soit plus fonctionnel.
    
    // mainGenerator.processIndexNamespace('src/entity/**/*.ts', NamespaceIndexTypes.CLASSES);
    break;

  case '4':
  case 'validator':
    console.log(logType.VALIDATOR, 'Generation of validations classes from main interfaces.');
    console.warn(logType.CLASS, 'The process has been deactivated.');
    // mainGenerator.test('src/interface/**/*.ts', NamespaceIndexTypes.INTERFACE);
    break;

  default:
    console.log(logType.INFORMATION, `Invalid parameters : "${firstArgs}"`);
    break;
}
