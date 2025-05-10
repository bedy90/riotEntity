
import * as path from 'path';
import * as fs from 'fs-extra';

import '../logger';
import { NamespaceIndexTypes } from '../common';
import { HeaderInfo, InterfaceData } from '../entities/interfaceData';
import { PropertySignature } from 'ts-morph';

export class GenerateValidator {

    constructor(public entitiesData: Record<string, Record<string, InterfaceData[]>>) {
    }

    /**
       * Generate Index files from interfaces or classes
       * @param filesFolderPath 
       * @param type 
       */
    processValidatorFiles(type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
        this.#generateFile(type);
    }

    /**
     * Génére les fichiers relatif aux validator
     */
    #generateFile(type: NamespaceIndexTypes = NamespaceIndexTypes.VALIDATOR) {
        Object.keys(this.entitiesData).forEach((namespace: string) => {
            const data: Record<string, InterfaceData[]> = this.entitiesData[namespace];

            Object.keys(data).forEach((version: string) => {
                const interfaces: InterfaceData[] = data[version];
                let fileContent: string = '';

                // Write Import
                interfaces.forEach((intData: InterfaceData) => {
                    // TODO: Move autrement
                    intData.addImport(`import { z, SafeParseReturnType } from 'zod';`);

                    // const interfaceName: string = intData.originalName;
                    // intData.properties : Is NULL
                    const properties = intData.properties.map((property: PropertySignature) => `${property.getName()}: ${property.getTypeNode()?.getText()}`);

                    fileContent = intData.validatorContent();
                    // fileContent += `export class ${intData.getClassesNameWithoutVersion()}Validator {`
                    // fileContent += '}'

                    // Create File
                    let outputFile : string = this.#createFile(intData.headerInfo, intData.getClassesNameWithoutVersion(), fileContent, type);

                    if (type == NamespaceIndexTypes.INTERFACE) {
                        console.log(`[SUCCESS] Interface namespace Index '${outputFile}' has been generated`);
                    }
                    else if (type == NamespaceIndexTypes.CLASSES) {
                        console.log(`[SUCCESS] Classes namespace Index '${outputFile}' has been generated`);
                    } else if (type == NamespaceIndexTypes.VALIDATOR) {
                        console.log(`[SUCCESS] Validator files '${outputFile}' has been generated`);
                    }

                });
            });
        });
    }

    #createFile(headerInfo: HeaderInfo | null, interfaceName: string, fileContent: string, type: NamespaceIndexTypes = NamespaceIndexTypes.VALIDATOR) : string {
        const namespace: string = headerInfo?.namespace;
        const version: string = headerInfo?.version;

        let subFolder = '';
        if (type == NamespaceIndexTypes.INTERFACE) {
            subFolder = 'interface';
        }
        else if (type == NamespaceIndexTypes.CLASSES) {
            subFolder = 'entity';
        }
        else if (type == NamespaceIndexTypes.VALIDATOR) {
            subFolder = 'validator';
        }

        // Déterminer le chemin de sortie
        let fileName: string = `${interfaceName.replace('DTO', '')}Validator.ts`;
        const outputPath: string = path.join('generate', subFolder, `${namespace}`, `${version}`, fileName);
        const outputDir : string = path.dirname(outputPath);
        
        // Créer le répertoire de sortie si nécessaire
        fs.ensureDirSync(outputDir);

        // Écrire le fichier index
        fs.writeFileSync(outputPath, fileContent);

        return path.join(outputDir, fileName);
    }
}