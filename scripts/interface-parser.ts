

import * as glob from 'glob';
import * as path from 'path';
import { Project, InterfaceDeclaration, TypeAliasDeclaration, ClassDeclaration } from 'ts-morph';

import './logger';
import { NamespaceIndexTypes } from './common';
import { HeaderInfo, InterfaceData } from './entities/interfaceData';

export class InterfaceParser {
    interfaces: InterfaceData[];

    // <[namespace], <[version], [InterfaceData]>
    constructor(public project: Project, public entitiesData: Record<string, Record<string, InterfaceData[]>>) {
        this.interfaces = [];
    }

    ParseFiles(filesFolderPath = 'src/interface/**/*.ts', type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) : void {
        // Read all interface files
        const sourceFiles = glob.sync(filesFolderPath);

        // Process
        sourceFiles.forEach((filePath: string) => {
            const fileName = path.basename(filePath);
            if (fileName.toLowerCase() == "index.ts") {
                return;
            }

            const sourceFile = this.project.addSourceFileAtPath(filePath);

            if (type == NamespaceIndexTypes.INTERFACE) {
                const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
                const typeAliases: TypeAliasDeclaration[] = sourceFile.getTypeAliases();

                if (interfaces && interfaces.length > 0) {
                    this.interfaces.push(...this.#readAllInterfaces(interfaces, filePath, false));
                }

                if (typeAliases && typeAliases.length > 0) {
                    this.interfaces.push(...this.#readAllTypeAliases(typeAliases, filePath, false));
                }
            }

            if (type == NamespaceIndexTypes.ENTITY) {
                // Only true if NamespaceIndexTypes = ENTITY (CLASSES)
                const classes: ClassDeclaration[] = sourceFile.getClasses(); 

                if (classes && classes.length > 0) {
                    this.#readAllClasses(classes);
                }
            }
        });
    }

    /**
     * Parcourir les interfaces pour générer les classes
     * @param interfaces 
     * @param filePath 
     * @param generateFile 
     * @param includeGlobal 
     */
    #readAllInterfaces(interfaces: InterfaceDeclaration[], filePath: string, includeGlobal = false) : InterfaceData[] {
        let returnValues: InterfaceData[] = [];

        interfaces.forEach((iface: InterfaceDeclaration) => {
            const interfaceName = iface.getName();
            const baseName = iface?.getSourceFile()?.getBaseName() || null;

            if (!baseName || baseName.toLowerCase().includes('index.ts') || (!includeGlobal && baseName.toLowerCase().includes('_global'))) {
                return;
            }

            if (interfaceName.startsWith('I')) {
                const className = interfaceName.substring(1);

                // Extraire les informations JSDoc
                // TODO : Move validation on extractJsDocInfoByDeclaration and THROW Exception (required Try..catch)
                const jsDocInfo: HeaderInfo = this.#extractJsDocInfoByDeclaration(iface);

                if (!jsDocInfo.isValid()) {
                    console.warn(`Interface ${interfaceName} can't be transformed into a class, as its JDOC is not declared.`);
                    return;
                }
                if (jsDocInfo.notImplemented) {
                    console.warn(`Interface ${interfaceName} isn't implemented.`);
                    return;
                }

                // Prepare interfaceData
                const data: InterfaceData = new InterfaceData(filePath, interfaceName, className, iface);

                data.addHeader(jsDocInfo);
                data.addJDOC(this.#generateClassHeader(className, jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix));
                this.#addEntities(jsDocInfo.namespace, jsDocInfo.version, data);

                returnValues.push(data);
            } // End if startsWith("I")
        });

        return returnValues;
    }

    /**
       * Parcours les « types » pour générer les classes
       * @param typeAliases
       * @param filePath
       */
    #readAllTypeAliases(typeAliases: TypeAliasDeclaration[], filePath: string, includeGlobal = false) : InterfaceData[] {
        let returnValues: InterfaceData[] = [];
        
        typeAliases.forEach((typeAlias: TypeAliasDeclaration) => {
            const typeName = typeAlias.getName();
            const globalType = typeAlias.getTypeNode()?.getText();

            if ((globalType && globalType.length > 0) && (typeName.startsWith('I') && (!includeGlobal && typeAlias.getTypeNode()?.getText()?.includes('_Global')))) {
                const className = typeName.substring(1);

                // Extraire les informations JSDoc
                const jsDocInfo: HeaderInfo = this.#extractJsDocInfoByDeclaration(typeAlias);

                if (!jsDocInfo.isValid()) {
                    console.warn(`Types ${typeName} can't be transformed into a class, as its JDOC is not declared.`);
                    return;
                }
                if (jsDocInfo.notImplemented) {
                    console.warn(`Types ${typeName} isn't implemented.`);
                    return;
                }

                const globalInterface: InterfaceDeclaration = this.project.getSourceFileOrThrow(path.join('src/interface/', '_Global/' + globalType + '.ts')).getInterfaceOrThrow(globalType.replace(/<.*>$/, ''));

                // Prepare interfaceData
                const data: InterfaceData = new InterfaceData(filePath, typeName, className, globalInterface);

                data.addHeader(jsDocInfo);
                data.addJDOC(this.#generateClassHeader(className, jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix));
                this.#addEntities(jsDocInfo.namespace, jsDocInfo.version, data);

                returnValues.push(data);
            }
        });

        return returnValues;
    }

    #readAllClasses(classes: ClassDeclaration[]): void {

        classes.forEach(cls => {
          const className = cls.getName();
          const baseName = cls?.getSourceFile()?.getBaseName() || null;
    
          if (!baseName || baseName.toLowerCase().includes('index.ts')) {
            return;
          }
    
          if (className) {
            // Extraire les informations JSDoc
            const jsDocInfo: HeaderInfo = this.#extractJsDocInfoByDeclaration(cls);
    
            if (jsDocInfo.notImplemented) {
              console.warn(`Class ${className} isn't implemented.`);
              return;
            }
    
            // Préparation du namespace (index)
            // this.#addNamespace(jsDocInfo.namespace, jsDocInfo.version, className);

            // TODO: Complete the process
          }
        });
      }

    /**
     * Generate JDOC header for classContent
     * @param className 
     * @param namespace 
     * @param version 
     * @param name 
     * @param prefix 
     * @returns 
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


} 