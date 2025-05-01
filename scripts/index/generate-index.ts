
import * as path from 'path';
import * as fs from 'fs-extra';

import '../logger';
import { NamespaceIndexTypes } from '../common';
import { InterfaceData } from '../entities/interfaceData';

export class GenerateIndex {

    constructor(public entitiesData: Record<string, Record<string, InterfaceData[]>>) {
    }

    /**
       * Generate Index files from interfaces or classes
       * @param filesFolderPath 
       * @param type 
       */
    processIndexNamespace(type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
        this.#generateIndexFile(type);
    }

    /**
     * Génére l'index.ts des interfaces a partir du namespaceVersions
     */
    #generateIndexFile(type: NamespaceIndexTypes = NamespaceIndexTypes.INTERFACE) {
        Object.keys(this.entitiesData).forEach((namespace: string) => {
            const data: Record<string, InterfaceData[]> = this.entitiesData[namespace];

            Object.keys(data).forEach((version: string) => {
                const interfaces: InterfaceData[] = data[version];
                let arrImports: Record<string, string> = {};
                let arrExportType: string[] = [];

                let fileContent: string = '';

                // Write Import
                interfaces.forEach((intData: InterfaceData) => {
                    const interfaceName: string = intData.originalName;

                    let keyPrefix: string = '';
                    let alias: string = intData.getExportAlias();
                    if (intData.headerInfo?.prefix) {
                        fileContent += `import { ${interfaceName} as ${alias} } from '${intData.getExportPath()}';\n`;
                        keyPrefix = intData.getPrefix();

                    } else {
                        fileContent += `import { ${interfaceName} } from '${intData.getExportPath()}';\n`;
                        alias = interfaceName; // We don't have a alias, we use interfaceName
                    }

                    // TODO : Revoir pour la gestion du multiversion. Type Union => V1 | V2 | ...
                    let key: string = intData.getClassesNameWithoutVersion();
                    let prefixedKey: string = `I${keyPrefix}${key}`;
                    arrExportType.push(`\nexport type ${prefixedKey} = ${alias};`);

                    arrImports[key] = alias;
                });

                // Write Export and prepare Union
                let nbItem: number = 0;

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

                    // // TODO : Revoir pour la gestion du multiversio. Type Union => V1 | V2 | ...
                    // arrExportType.push(`\nexport type ${key} = ${value};`);
                });
                fileContent = fileContent.trimEnd();
                fileContent += `\n};\n`;

                // Add export type (Union) 
                arrExportType.forEach(expType => {
                    fileContent += `${expType}`;
                });

                let subFolder = '';
                if (type == NamespaceIndexTypes.INTERFACE) {
                    subFolder = 'interface';
                }
                else if (type == NamespaceIndexTypes.CLASSES) {
                    subFolder = 'entity';
                }

                // Déterminer le chemin de sortie
                const outputPath = path.join('generate', subFolder, `${namespace}`, 'index.ts');
                const outputDir = path.dirname(outputPath);
                const outputFile = path.join(outputDir, 'index.ts');

                // Créer le répertoire de sortie si nécessaire
                fs.ensureDirSync(outputDir);

                // Écrire le fichier index
                fs.writeFileSync(outputPath, fileContent);

                if (type == NamespaceIndexTypes.INTERFACE) {
                    console.log(`[SUCCESS] Interface namespace Index '${outputFile}' has been generated`);
                }
                else if (type == NamespaceIndexTypes.CLASSES) {
                    console.log(`[SUCCESS] Classes namespace Index '${outputFile}' has been generated`);
                }
            });
        });
    }
}