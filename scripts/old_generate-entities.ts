// import * as fs from 'fs-extra';
// import * as glob from 'glob';
// import * as path from 'path';
import fs, { readFileSync, ensureDirSync } from 'fs-extra';
import glob, { sync } from 'glob';
import path, { basename, join } from 'path';

// const interfacesDir = path.join(__dirname, '../', 'src', 'interface');
// const entitiesDir = path.join(__dirname, '../', 'generate', 'entity');
const interfacesDir = join(__dirname, '../', 'src', 'interface');
const entitiesDir = join(__dirname, '../', 'generate', 'entity');

// Assurez-vous que le répertoire de destination existe
// fs.ensureDirSync(entitiesDir);
ensureDirSync(entitiesDir);

// Trouver tous les fichiers d'interface
// const interfaceFiles = glob.sync('**/*.ts', { cwd: interfacesDir });
const interfaceFiles = sync('**/*.ts', { cwd: interfacesDir, ignore: '**/index.ts' });

// Parcourir chaque fichier d'interface
interfaceFiles.forEach((filePath: string) => {
    const dirPath = path.join(entitiesDir, path.dirname(filePath));
    fs.ensureDirSync(dirPath);

    const fileName : string = basename(filePath);

    const fullPath = path.join(interfacesDir, filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // Extraire les interfaces du fichier
    const interfaces = content.match(/export interface (\w+) {([\s\S]+?)}/g) || [];

    // Générer les classes correspondantes
    const classes = interfaces.map((interfaceStr: string) => {
        // if (!interfaceStr || interfaceStr == null) {
        //     return;
        // }
        const regexResult: RegExpMatchArray | null = interfaceStr.match(/export interface (\w+) {/);
        const interfaceName: string = ((regexResult && regexResult.length > 0) ? regexResult[1] : "");

        const className: string = interfaceName.slice(1);

        const propertiesResult: RegExpMatchArray | null = interfaceStr.match(/{([\s\S]+?)}/);
        const properties = ((propertiesResult && propertiesResult.length > 0) ? propertiesResult[1] : "");

        let classContent: string = `export class ${className} implements ${interfaceName} {\n`
        classContent += properties.split('\n').map((line) =>
            `${line.trim().replace(/;$/, '')};`
        ).join('\n');
        classContent += `}`;

        return classContent;

        // classContent += `${properties
        //   .split('\n')
        //   .map((line) => `  ${line.trim().replace(/;$/, '')};`)
        //   .join('\n')}\n}`;
        // return classContent;

    });

    // Écrire les classes dans un fichier
    let realFilePath: string = filePath.slice(1);
    const entityFilePath2 = path.join(entitiesDir, filePath.replace(/^I(.+)\.ts$/, '$1.ts'));

    // const entityFilePath = path.join(entitiesDir, filePath.replace(/\.ts$/, '.entity.ts'));
    fs.writeFileSync(entityFilePath2, classes.join('\n\n'), 'utf-8')

    // const entityFilePath = path.join(entitiesDir, `${path.basename(filePath, '.ts')}.ts`);
    // fs.writeFileSync(entityFilePath, classes.join('\n\n'), 'utf-8');
});