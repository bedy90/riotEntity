// import { InterfaceDeclaration, PropertySignature, TypeAliasDeclaration } from 'ts-morph';
// import { ImportTypes, NamespaceIndexTypes } from '../common';
// import path from 'path';

// export class HeaderInfo {

//     constructor(public namespace: string | (any | undefined),
//         public version: number | (any | undefined),
//         public name: string | (any | undefined),
//         public prefix: string | (any | undefined),
//         public notImplemented: boolean) {
//     }

//     isValid(): boolean {
//         if (!this.namespace || !this.version || !this.name) {
//             return false
//         }
//         return true;
//     }
// }

// export class InterfaceProperties {

//     constructor (public propertyName: string, public propertyType: string) {

//     }
// }

// /**
//  * Classe responsable de la génération des classes d'entités a partir des interfaces
//  */
// export class InterfaceData {

//     /**
//      * Current JsDoc Header
//      */
//     headerInfo!: HeaderInfo | null;
//     properties: PropertySignature[];
//     customTypes: Set<string>;
//     globalTypes: Set<string>;
//     imports: string[];
//     jdocHeader!: string;

//     intProp: InterfaceProperties[];

//     /**
//      * Allinteface : new InterfaceData(filePath, interfaceName, className, iface, null, this.namespaceType);
//      * TypeAlias : new InterfaceData(filePath, typeName, className, globalInterface, null, type);
//      * @param filePath 
//      * @param originalName 
//      * @param className 
//      * @param iface 
//      * @param typeAlias 
//      * @param namespaceType 
//      */
//     constructor(public filePath: string,
//                 public originalName: string,
//                 public className: string,
//                 public iface: InterfaceDeclaration | null = null,
//                 public typeAlias: TypeAliasDeclaration | null = null,
//                 public namespaceType: NamespaceIndexTypes) {

//         this.headerInfo = null;
//         this.properties = [];
//         this.customTypes = new Set<string>();
//         this.globalTypes = new Set<string>();
//         this.imports = new Array<string>();
//         this.intProp = new Array<InterfaceProperties>();

//         if (this.namespaceType != NamespaceIndexTypes.VALIDATOR) {
//             this.addImport('import { Interfaces } from \'@/riotentity\';');
//         }

//         if (iface) {
//             const properties: PropertySignature[] = this.#getAllPropertiesByInterfaceDeclaration(iface);
//             this.addProperties(properties);
//         }
//         if (typeAlias) {
//             console.log('alias')
//         }
//     }

//     addHeader(header: HeaderInfo): void {
//         this.headerInfo = header;
//     }

//     addProperties(properties: PropertySignature[]): void {
//         if (properties && properties.length > 0) {
//             this.properties = properties;
//             // TODO : Ne pas faire pour Validator ? Ou faire avec « Validator » au lieu de « Interface »
//             this.addCustomAndGlobalTypes(this.properties);
//         }
//     }

//     addTypes(custom: Set<string>, global: Set<string>): void {
//         this.customTypes = custom;
//         this.globalTypes = global;
//     }

//     addType(data: { customTypes: Set<string>, globalTypes: Set<string> }): void {
//         this.customTypes = data.customTypes;
//         this.globalTypes = data.globalTypes;
//     }

//     addImport(importData: string): void {
//         if (importData) {
//             this.imports.push(importData);
//         }
//     }

//     addJDOC(jdocData: string) {
//         if (jdocData) {
//             this.jdocHeader = jdocData;
//         }
//     }

//     getFileName(): string {
//         return path.parse(this.filePath).name;
//     }

//     getExportPath(): string {
//         return `./${this.headerInfo?.version}/${this.getFileName()}`;
//     }

//     getExportAlias(): string {
//         return (this.headerInfo?.prefix ? `I${this.headerInfo?.prefix}${this.className}` : '');
//     }

//     getPrefix(): string {
//         return (this.headerInfo?.prefix ? this.headerInfo?.prefix : '');
//     }

//     getInterfaceNameWithoutVersion(): string {
//         return this.originalName.substring(0, this.originalName.lastIndexOf("_"));
//     }
//     getClassesNameWithoutVersion(): string {
//         return this.className.substring(0, this.className.lastIndexOf("_"));
//     }
//     getValidatorClassesName(): string {
//         let className : string = this.className.substring(0, this.className.lastIndexOf("_"));
//         className = className.replace('DTO', '');

//         return `${className}Validator`;
//     }

//     classContent(): string {
//         if (!this.headerInfo) {
//             throw new Error('HeaderInfo can\'t be null');
//         }
//         const classContent: string[] = [];
//         classContent.push(...this.imports);
//         classContent.push(this.jdocHeader);
//         classContent.push(`export class ${this.className} implements Interfaces.${this.headerInfo.name}_${this.headerInfo.version} {`);

//         classContent.push(this.#generateProperties());
//         classContent.push('}\n'); // add /n for add a empty line EOF

//         // Utiliser \r\n pour les fins de ligne Windows CR LF
//         // return classContent.join(`\r\n`);

//         // Utiliser \n pour les fins de ligne Unix LF
//         return classContent.join('\n');
//     }

//     validatorContent(): string {
//         if (!this.headerInfo) {
//             throw new Error('HeaderInfo can\'t be null');
//         }

//         const classContent: string[] = [];
//         classContent.push(...this.imports);
//         classContent.push(this.jdocHeader); // Avoir un Header différent our le validateur
//         classContent.push(`export class ${this.getValidatorClassesName()} {\n`);

//         classContent.push(`\tstatic schema = z.object({});\n`);
//         // classContent.push(this.#generateProperties());

//         classContent.push(`\tstatic validate(obj: any): ZodSafeParseResult<any> {`);
//             // classContent.push(`\t\treturn AccountValidator.schema.safeParse(obj);`);
//         classContent.push(`\t\treturn this.schema.safeParse(obj);`);
//         classContent.push(`\t}`);

//         classContent.push('\n}\n');

//         // Utiliser \r\n pour les fins de ligne Windows CR LF
//         // return classContent.join(`\r\n`);

//         // Utiliser \n pour les fins de ligne Unix LF
//         return classContent.join('\n');
//     }

//     /**
//      * Generate all imports from types list
//      * @param types
//      * @param importType
//      * @returns
//      */
//     addImportTypes(types: Set<string>, importType: ImportTypes): void {
//         if (types && types.size > 0) {
//             switch (importType) {
//                 case ImportTypes.CUSTOM:
//                     const imports = `import { ${[...types].join(', ')} } from '@/riotentity';`; // \n

//                     this.addImport(imports);
//                     break;

//                 case ImportTypes.GLOBAL:
//                     // TODO: Now we can `import { Interfaces } from '@/riotentity'`; for Global/Shared
//                     types.forEach(globalType => {
//                         // TODO: Now we can `import { Interfaces } from '@/riotentity'`;
//                         // And use : Interfaces.Shared.IGLOBALXYZ
//                         // const globalImportPath = `@/src/interface/_Global/${globalType}`;
//                         // const imports = `import { ${globalType} } from '${globalImportPath}';`; // \n

//                         // Interfaces.Shared.

//                         // this.addImport(imports);
//                     });
//                     break;
//             }
//         }
//     }

//     /**
//      * Fonction pour extraire les types personnalisés des propriétés d'une interface
//      * @param properties
//      * @returns
//      */
//     addCustomAndGlobalTypes(properties: PropertySignature[]): void {
//         const customTypes = new Set<string>();
//         const globalTypes = new Set<string>();

//         properties.forEach(property => {
//             const propType = property.getTypeNode()?.getText() || '';
//             const matches = propType.match(/\b[A-Z][a-zA-Z0-9_]*\b/g);

//             if (matches) {
//                 matches.forEach(type => {
//                     // Exclure les types contenant « Interfaces » ainsi que les types primitifs et globaux
//                     if (!propType.includes('Interfaces.') &&
//                         !['string', 'number', 'boolean', 'any', 'undefined', 'null', 'void', 'never', 'object', 'unknown', 'map'].includes(type.toLowerCase())) {

//                         if (type == 'Declarations' && propType.includes(type)) {
//                             if (!customTypes.has(type)) {
//                                 customTypes.add(type);
//                             }
//                         }

//                         // Split customType and globalTypes
//                         if (type.toLowerCase().includes('_global') || type.toLowerCase().includes('Shared')) {
//                             // globalTypes.add(type);
//                             if (!globalTypes.has(type)) {
//                                 globalTypes.add(type);
//                             }
//                         }
//                         /*else {
//                             if (!customTypes.has(type)) {
//                                 customTypes.add(type);
//                             }
//                         }*/

//                         // Foreach
//                     } else {
//                         // "Interfaces.TFT_ICompanionDTO_v1"
//                         // "Interfaces.TFT_ITraitDTO_v1[]"
//                         // "Interfaces.TFT_IUnitDTO_v1[]"
//                         // etc.
//                         // console.log('exclude')
//                     }
//                 });
//             }
//         });
//         this.globalTypes = globalTypes;
//         this.customTypes = customTypes;

//         this.addTypes(customTypes, globalTypes);
//         this.addImportTypes(customTypes, ImportTypes.CUSTOM);
//         this.addImportTypes(globalTypes, ImportTypes.GLOBAL);
//     }

//     /**
//      * Generate all properties
//      * @param properties
//      * @returns
//      */
//     #generateProperties(): string {
//         const propertiesData: string[] = [];

//         if (this.properties && this.properties.length > 0) {
//             this.properties.forEach((property: PropertySignature) => {
//                 const propName = property.getName();
//                 const propType = property.getTypeNode()?.getText() || 'any';

//                 propertiesData.push(`    ${propName}!: ${propType};`);
//             });
//         }
//         return propertiesData.join('\n');
//     }

//     /**
//      * Fonction pour extraire les propriétés d'une interface, y compris celles héritées
//      * @param iface
//      * @returns
//      */
//     #getAllPropertiesByInterfaceDeclaration(iface: InterfaceDeclaration): PropertySignature[] {
//         const properties: PropertySignature[] = [];

//         // Ajouter les propriétés de l'interface actuelle
//         properties.push(...iface.getProperties());

//         // Parcourir les interfaces héritées
//         iface.getExtends().forEach(heritageClause => {
//             const extendedInterface = heritageClause.getType().getSymbol()?.getDeclarations()[0] as InterfaceDeclaration;
//             if (extendedInterface) {
//                 properties.push(...this.#getAllPropertiesByInterfaceDeclaration(extendedInterface));
//             }
//         });

//         return properties;
//     }
// }