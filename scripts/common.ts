import * as fs from 'fs-extra';
import * as path from 'path';

//#region Enum
export enum ImportTypes {
    GLOBAL = 0,
    CUSTOM = 1,
  }
  
  export enum NamespaceIndexTypes {
    INTERFACE = 0,
    ENTITY = 1,
    VALIDATOR = 2
  }
  
  export enum ValidationTypes {
    GENERIC = 1,
    GENERIC_ARRAY = 2,
  
    CUSTOM_TYPE = 5,
    CUSTOM_TYPE_ARRAY = 6,
  
    ENUM = 8,
    ENUM_ARRAY = 9,
  
    GLOBAL_TYPE = 12,
    GLOBAL_TYPE_ARRAY = 13,
  }
  //#endregion

  export class CommonUtils {

    static writeFile(basePath: string, orignalFilePath: string, fileName: string, fileContent: string): void { 
      const relativePath = path.relative(basePath, orignalFilePath);
      const outputPath = path.join('generate', 'entity', relativePath);
      const outputDir = path.dirname(outputPath);
      const outputFile = path.join(outputDir, `${fileName}.ts`);
  
      // Créer le répertoire de sortie si nécessaire
      fs.ensureDirSync(outputDir);
  
      // Écrire le fichier de classe
      fs.writeFileSync(outputFile, fileContent);
    }

  }
