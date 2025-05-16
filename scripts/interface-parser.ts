import * as fastGlob from 'fast-glob';
import * as path from 'path';
import { Project, InterfaceDeclaration, TypeAliasDeclaration, ClassDeclaration, SourceFile } from 'ts-morph';

import './logger';
import { NamespaceIndexTypes } from './common';
import { HeaderInfo } from './entities/headerInfo';
import { InterfaceData } from './entities/interfaceData-clean';

/**
 * Classe responsable de la lecture et  de l'extraction du contenu des interfaces
 */
export class InterfaceParser {
    interfaces: InterfaceData[];

    constructor(public project: Project, 
                public namespaceType: NamespaceIndexTypes,
                public entitiesData: Record<string, Record<string, InterfaceData[]>>) {
        this.interfaces = [];
    }

    ParseFiles(filesFolderPaths: string[] = ['src/interface/**/*.ts', '!src/interface/**/index.ts']): void {
        // Read all interface files
        const sourceFiles: string[] = fastGlob.sync(filesFolderPaths);

        // Add All sources
        this.project.addSourceFilesAtPaths(sourceFiles);

        this.project.getSourceFiles().forEach((sourceFile: SourceFile) => {
            const filePath: string = sourceFile.getFilePath();
            const fileName : string = sourceFile.getBaseName();

            // Secure: Remove all index files
            if (fileName && fileName.toLowerCase() == 'index.ts') {
                this.project.removeSourceFile(sourceFile);
                return;
            }

            const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
            const typeAliases: TypeAliasDeclaration[] = sourceFile.getTypeAliases();

            if (interfaces && interfaces?.length > 0) {
                this.interfaces.push(...this.#readAllInterfaces(interfaces, filePath, false));
            }

            if (typeAliases && typeAliases?.length > 0) {
                this.interfaces.push(...this.#readAllTypeAliases(typeAliases, filePath, false));
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
    #readAllInterfaces(interfaces: InterfaceDeclaration[], filePath: string, includeGlobal = false): InterfaceData[] {
        let returnValues: InterfaceData[] = [];

        interfaces.forEach((iface: InterfaceDeclaration) => {
            const interfaceName : string = iface.getName(); // Full InterfaceName (IXYZ_Global / IXYZ)
            const fileName : string | null = iface?.getSourceFile()?.getBaseName() || null; // Full FileName (IAccountDTO.ts)
            const fileNameWithoutExt : string | null = iface?.getSourceFile()?.getBaseNameWithoutExtension() || null; // Filename without ext (IAccountDTO)

            if (!fileName || fileName.toLowerCase().includes('index.ts') || (!includeGlobal && fileName.toLowerCase().includes('_global'))) {
                return;
            }

            // Prefix filename pattern
            if (interfaceName.startsWith('I')) {
                const className = interfaceName.substring(1);

                // Extraire les informations JSDoc
                const jsDocInfo: HeaderInfo = this.#extractJsDocInfoByDeclaration(iface);

                if (!jsDocInfo.isValid()) {
                    console.warn(`Interface ${interfaceName} can't be processed, as its JDOC is not declared.`);
                    return;
                }
                if (jsDocInfo.notImplemented) {
                    console.warn(`Interface ${interfaceName} can't be processed, because isn't implemented`);
                    return;
                }

                // Prepare interfaceData
                const data: InterfaceData = new InterfaceData(jsDocInfo, interfaceName, filePath, fileName, this.namespaceType, iface, null);

                // TODO 2025: revoir pour la gestion className/interfaceName/ValidatorName
                // data.addJDOC(this.#generateJsDocHeader(className, jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix));
                this.#addEntities(jsDocInfo, data);


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
    #readAllTypeAliases(typeAliases: TypeAliasDeclaration[], filePath: string, includeGlobal = false): InterfaceData[] {
        let returnValues: InterfaceData[] = [];

        typeAliases.forEach((typeAlias: TypeAliasDeclaration) => {
            const typeName = typeAlias.getName();
            const fileName : string | null = typeAlias?.getSourceFile()?.getBaseName() || null;
            const globalType = typeAlias.getTypeNode()?.getText();

            if (!fileName || fileName.toLowerCase().includes('index.ts')) {
                return;
            }

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
                const data: InterfaceData = new InterfaceData(jsDocInfo, typeName, filePath, fileName, this.namespaceType, globalInterface, null);
                 // TODO 2025: revoir pour la gestion className/interfaceName/ValidatorName
                // data.addJDOC(this.#generateJsDocHeader(className, jsDocInfo.namespace, jsDocInfo.version, jsDocInfo.name, jsDocInfo.prefix));
                this.#addEntities(jsDocInfo, data);

                returnValues.push(data);
            }
        });

        return returnValues;
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
    #generateJsDocHeader(objName: string, namespace: string, version: string, name: string, prefix: string): string {
        let header = '';

        header += '\n/**\n';
        switch (this.namespaceType) {
            case NamespaceIndexTypes.CLASSES:
                header += ` * Class ${objName}\n`;
                break;
            case NamespaceIndexTypes.VALIDATOR:
                header += ` * Validator ${objName}\n`;
                break;
            default:
                header += ` * ${objName}\n`;
                break;

        }
        header += ' *\n';
        header += ` * @namespace ${namespace}\n`;
        header += ` * @version ${version}\n`;
        header += ` * @name ${name}\n`;
        if (prefix && prefix !== undefined) {
            header += ` * @prefix ${prefix}\n`;
        }
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

    #addEntities(header: HeaderInfo, data: InterfaceData): void {
        if (data) {
            let namespace: string = header.namespace;
            let version: string = header.version;

            if (!this.entitiesData[namespace]) {
                this.entitiesData[namespace] = {};
            }

            // Ajouter la version dans le namespaceVersions, si elle n'existe pas
            if (!this.entitiesData[namespace][version]) {
                this.entitiesData[namespace][version] = [];
            }

            this.entitiesData[namespace][version].push(data);
        }
    }

} 