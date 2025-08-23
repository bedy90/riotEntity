const path = require('path');
const fs = require('fs');

// Fonction utilitaire pour récupérer tous les fichiers TS dans la structure donnée
function getConfigEntries(baseDir = '../src') {
    const modules = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

    const configs = [];

    modules.forEach(moduleName => {
        const modulePath = path.join(baseDir, moduleName);
        const versions = fs.readdirSync(modulePath).filter(f => fs.statSync(path.join(modulePath, f)).isDirectory());
        versions.forEach(version => {
            const versionPath = path.join(modulePath, version);
            const files = fs.readdirSync(versionPath).filter(f => f.endsWith('.ts'));
            files.forEach(file => {
                const inputPath = path.join(versionPath, file);
                const outputDir = path.join('generate', 'schema', moduleName, version);
                const outputFile = file.replace(/^I/, '').replace(/\.ts$/, '.zod.ts');
                const outputPath = path.join(outputDir, outputFile);
                configs.push({
                    name: `${moduleName}_${version}_${file}`,
                    input: inputPath.replace(/\\/g, '/'),
                    output: outputPath.replace(/\\/g, '/'),
                });
            });
        });
    });

    return configs;
}

module.exports = getConfigEntries();
