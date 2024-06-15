import { InterfaceDeclaration, PropertySignature, TypeAliasDeclaration } from 'ts-morph';
import { ImportTypes } from '../generate-entities';

export class HeaderInfo {

    constructor(public namespace: string,
        public version: number,
        public name: string) {
    }
}


export class InterfaceData {

    headerInfo!: HeaderInfo | null;
    properties: PropertySignature[];
    customTypes: Set<string>;
    globalTypes: Set<string>;
    imports: string[];
    jdocHeader!: string;

    constructor(public filePath: string,
                 public originalName: string,
                 public className: string,
                public iface: InterfaceDeclaration | null = null,
                public typeAlias: TypeAliasDeclaration | null = null) {
        this.headerInfo = null;
        this.properties = [];
        this.customTypes = new Set<string>();
        this.globalTypes = new Set<string>();
        this.imports = new Array<string>();

        this.addImport('import { Interfaces } from \'@/riotentity\';');

        if (iface) {
            const properties = this.#getAllPropertiesByInterfaceDeclaration(iface);
            this.addProperties(properties);
        }
    }

    addHeader(namespace: string, version: number, name: string): void {
        this.headerInfo = new HeaderInfo(namespace, version, name);
    }

    addProperties(properties: PropertySignature[]): void {
        if (properties) {
            this.properties = properties;
            this.addCustomAndGlobalTypes(this.properties);
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

    classContent(): string {
        if (!this.headerInfo) {
            throw new Error('HeaderInfo can\'t be null');
        }
        const classContent: string[] = [];
        classContent.push(...this.imports);
        classContent.push(this.jdocHeader);
        classContent.push(`export class ${this.className} implements Interfaces.${this.headerInfo.namespace}.${this.headerInfo.version}.${this.headerInfo.name} {`);
        classContent.push(this.#generateProperties());
        classContent.push('}\n'); // add /n for add a empty line EOF

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
                    types.forEach(globalType => {
                        const globalImportPath = `@/src/interface/_Global/${globalType}`;
                        const imports = `import { ${globalType} } from '${globalImportPath}';`; // \n

                        this.addImport(imports);
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
                    if (!propType.includes('Interfaces.') && !['string', 'number', 'boolean', 'any', 'undefined', 'null', 'void', 'never', 'object', 'unknown', 'map'].includes(type.toLowerCase())) {
                        // Split customType and globalTypes
                        if (type.toLowerCase().includes('_global')) {
                            globalTypes.add(type);
                        } else {
                            customTypes.add(type);
                        }
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
     * Generate all properties
     * @param properties
     * @returns
     */
    #generateProperties(): string {
        const propertiesData: string[] = [];

        if (this.properties && this.properties.length > 0) {
            this.properties.forEach((property: PropertySignature) => {
                const propName = property.getName();
                const propType = property.getTypeNode()?.getText() || 'any';

                propertiesData.push(`    ${propName}!: ${propType};`);
            });
        }
        return propertiesData.join('\n');
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