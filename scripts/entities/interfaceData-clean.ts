import { InterfaceDeclaration, PropertySignature, Type, TypeAliasDeclaration } from 'ts-morph';
import { ImportTypes, NamespaceIndexTypes } from '../common';
import path from 'path';
import { HeaderInfo } from './headerInfo';
import { InterfaceProperties } from './interfaceProperties';

/**
 * Classe responsable de la génération des classes d'entités a partir des interfaces
 * TODO 2025: Voir si l'ensemble des fonctions sont utiles
 */
export class InterfaceData {

    /**
     * Current JsDoc Header
     */
    // headerInfo!: HeaderInfo | null;
    jdocHeader!: string;

    /**
     * Interface properties
     */
    // properties: PropertySignature[];
    properties: InterfaceProperties[];

    // ??
    customTypes: Set<string>;
    globalTypes: Set<string>;
    imports: string[];



    constructor(public headerInfo: HeaderInfo,
        // public namespace: string,
        public interfaceName: string,
        public filePath: string,
        public fileName: string,
        public namespaceType: NamespaceIndexTypes,
        public ifaceDeclaration: InterfaceDeclaration | null = null,
        public typeAliasDeclaration: TypeAliasDeclaration | null = null,
    ) {
        // Initialize class properties
        // this.headerInfo = null;
        // this.namespace = this.headerInfo?.namespace;
        // this.properties = [];
        this.properties = new Array<InterfaceProperties>();

        // TO VALIDE
        this.customTypes = new Set<string>();
        this.globalTypes = new Set<string>();
        this.imports = new Array<string>();
        // END

        if (ifaceDeclaration) {
            // const properties: PropertySignature[] = this.#getAllPropertiesByInterfaceDeclaration(ifaceDeclaration);
            // this.addProperties(properties);

            const allProps: InterfaceProperties[] = this.#getAllProperties(ifaceDeclaration);
            this.properties.push(...allProps);
        }


        if (typeAliasDeclaration) {
            console.log('alias')
        }
    }

    addHeader(header: HeaderInfo): void {
        this.headerInfo = header;
    }

    addProperties(properties: PropertySignature[]): void {
        if (properties && properties.length > 0) {
            // this.properties = properties;
            // TODO : Ne pas faire pour Validator ? Ou faire avec « Validator » au lieu de « Interface »
            // this.addCustomAndGlobalTypes(this.properties);
        }
    }

    addTypes(custom: Set<string>, global: Set<string>): void {
        this.customTypes = custom;
        this.globalTypes = global;
    }

    addType(data: { customTypes: Set<string>, globalTypes: Set<string> }): void {
        this.customTypes = data.customTypes;
        this.globalTypes = data.globalTypes;
    }

    addImport(importData: string): void {
        if (importData) {
            this.imports.push(importData);
        }
    }

    addJDOC(jdocData: string) {
        if (jdocData) {
            this.jdocHeader = jdocData;
        }
    }

    // ******************************************
    // ClassName & InterfaceName   getters
    // ******************************************

    /**
     * Return the className
     * @returns InterfaceName without « I »
     */
    getClassName(): string {
        return this.interfaceName.substring(1);
    }

    getInterfaceName(): string {
        return this.interfaceName;
    }

    getInterfaceNameWithoutVersion(): string {
        return this.interfaceName.substring(0, this.interfaceName.lastIndexOf("_"));
    }

    getClassesNameWithoutVersion(): string {
        return this.getInterfaceNameWithoutVersion().substring(1); // this.getClassName().substring(0, this.getClassName().lastIndexOf("_"));
    }

    getClassesNameWithoutDTO(withVersion: boolean = true): string {
        let className: string = (withVersion ? this.getClassName() : this.getClassesNameWithoutVersion())
        return className.replace('DTO', '');
    }

    getValidatorClassesName(withVersion: boolean = true): string {
        // let className : string = this.getClassesNameWithoutVersion(); // this.getClassName().substring(0, this.getClassName().lastIndexOf("_"));
        // className = className.replace('DTO', '');

        // return `${className}Validator`;
        return `${this.getClassesNameWithoutDTO(withVersion)}Validator`;
    }

    // ******************************************
    // Filename  getters
    // ******************************************
    getFileName(): string {
        return path.parse(this.filePath).name;
    }

    getExportPath(): string {
        return `./${this.headerInfo?.version}/${this.getFileName()}`;
    }

    // Not classes
    getExportAlias(): string {
        return (this.headerInfo?.prefix ? `I${this.headerInfo?.prefix}${this.getClassName()}` : '');
    }

    getPrefix(): string {
        return (this.headerInfo?.prefix ? this.headerInfo?.prefix : '');
    }


    // ******************************************
    // FileContent
    // ******************************************
    classContent(): string {
        if (!this.headerInfo) {
            throw new Error('HeaderInfo can\'t be null');
        }

        const classContent: string[] = [];
        classContent.push(...this.imports);
        classContent.push(this.jdocHeader);
        classContent.push(`export class ${this.getClassName()} implements Interfaces.${this.headerInfo.name}_${this.headerInfo.version} {`);

        classContent.push(this.#generateProperties());
        classContent.push('}\n'); // add /n for add a empty line EOF

        // Utiliser \r\n pour les fins de ligne Windows CR LF
        // return classContent.join(`\r\n`);

        // Utiliser \n pour les fins de ligne Unix LF
        return classContent.join('\n');
    }

    validatorContent(): string {
        if (!this.headerInfo) {
            throw new Error('HeaderInfo can\'t be null');
        }

        const classContent: string[] = [];
        classContent.push(...this.imports);
        classContent.push(this.jdocHeader); // Avoir un Header différent our le validateur
        classContent.push(`export class ${this.getValidatorClassesName()} {\n`);

        classContent.push(`\tstatic schema = z.object({});\n`);
        // classContent.push(this.#generateProperties());

        classContent.push(`\tstatic validate(obj: any): ZodSafeParseResult<any> {`);
        // classContent.push(`\t\treturn AccountValidator.schema.safeParse(obj);`);
        classContent.push(`\t\treturn this.schema.safeParse(obj);`);
        classContent.push(`\t}`);

        classContent.push('\n}\n');

        // Utiliser \r\n pour les fins de ligne Windows CR LF
        // return classContent.join(`\r\n`);

        // Utiliser \n pour les fins de ligne Unix LF
        return classContent.join('\n');
    }

    /**
     * Generate all imports from types list
     * @param types
     * @param importType
     * @returns
     */
    addImportTypes(types: Set<string>, importType: ImportTypes): void {
        if (types && types.size > 0) {
            switch (importType) {
                case ImportTypes.CUSTOM:
                    const imports = `import { ${[...types].join(', ')} } from '@/riotentity';`; // \n

                    this.addImport(imports);
                    break;

                case ImportTypes.GLOBAL:
                    // TODO: Now we can `import { Interfaces } from '@/riotentity'`; for Global/Shared
                    types.forEach(globalType => {
                        // TODO: Now we can `import { Interfaces } from '@/riotentity'`;
                        // And use : Interfaces.Shared.IGLOBALXYZ
                        // const globalImportPath = `@/src/interface/_Global/${globalType}`;
                        // const imports = `import { ${globalType} } from '${globalImportPath}';`; // \n

                        // Interfaces.Shared.

                        // this.addImport(imports);
                    });
                    break;
            }
        }
    }

    /**
     * Fonction pour extraire les types personnalisés des propriétés d'une interface
     * @param properties
     * @returns
     */
    addCustomAndGlobalTypes(properties: PropertySignature[]): void {
        const customTypes = new Set<string>();
        const globalTypes = new Set<string>();

        properties.forEach(property => {
            const propType = property.getTypeNode()?.getText() || '';
            const matches = propType.match(/\b[A-Z][a-zA-Z0-9_]*\b/g);

            if (matches) {
                matches.forEach(type => {
                    // Exclure les types contenant « Interfaces » ainsi que les types primitifs et globaux
                    if (!propType.includes('Interfaces.') &&
                        !['string', 'number', 'boolean', 'any', 'undefined', 'null', 'void', 'never', 'object', 'unknown', 'map'].includes(type.toLowerCase())) {

                        if (type == 'Declarations' && propType.includes(type)) {
                            if (!customTypes.has(type)) {
                                customTypes.add(type);
                            }
                        }

                        // Split customType and globalTypes
                        if (type.toLowerCase().includes('_global') || type.toLowerCase().includes('Shared')) {
                            // globalTypes.add(type);
                            if (!globalTypes.has(type)) {
                                globalTypes.add(type);
                            }
                        }
                        /*else {
                            if (!customTypes.has(type)) {
                                customTypes.add(type);
                            }
                        }*/

                        // Foreach
                    } else {
                        // "Interfaces.TFT_ICompanionDTO_v1"
                        // "Interfaces.TFT_ITraitDTO_v1[]"
                        // "Interfaces.TFT_IUnitDTO_v1[]"
                        // etc.
                        // console.log('exclude')
                    }
                });
            }
        });
        this.globalTypes = globalTypes;
        this.customTypes = customTypes;

        this.addTypes(customTypes, globalTypes);
        this.addImportTypes(customTypes, ImportTypes.CUSTOM);
        this.addImportTypes(globalTypes, ImportTypes.GLOBAL);
    }

    /**
     * Generate all properties for content file
     * @param properties
     * @returns
     */
    #generateProperties(): string {
        const propertiesData: string[] = [];

        if (this.properties && this.properties.length > 0) {

            this.properties.forEach((property: InterfaceProperties) => {
                propertiesData.push(property.PropertyDeclaration);
                // const propName = property.getName();
                // const propType = property.getTypeNode()?.getText() || 'any';

                // propertiesData.push(`    ${propName}!: ${propType};`);
            });

        }
        return propertiesData.join('\n');
    }

    /**
     * Fonction pour extraire les propriétés d'une interface, y compris celles héritées
     * @param interfaceDec 
     * @param alreadySeen 
     * @returns 
     */
    #getAllProperties(interfaceDec: InterfaceDeclaration, alreadySeen = new Set<string>()): InterfaceProperties[] {
        let props: InterfaceProperties[] = [];

        // Propriétés locales
        let propertySignature: PropertySignature;
        for (propertySignature of interfaceDec.getProperties()) {
            const propertyName: string = propertySignature.getName();
            const propertyTypeStr: string = propertySignature.getType().getText();
            let propertyType: Type = propertySignature.getType();

            if (!alreadySeen.has(propertyName)) {
                props.push(new InterfaceProperties(propertyName, propertyTypeStr, propertySignature, propertyType));
                alreadySeen.add(propertyName);
            }
        }

        // Parcours récursif des interfaces parentes
        for (const ext of interfaceDec.getExtends()) {
            const symbol = ext.getExpression().getType().getSymbol();
            if (symbol) {
                const decl = symbol.getDeclarations().find(d => d.getKindName() === "InterfaceDeclaration") as InterfaceDeclaration | undefined;
                if (decl) {
                    props = props.concat(this.#getAllProperties(decl, alreadySeen));
                }
            }
        }

        return props;
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
}