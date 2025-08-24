const path = require('path');
const fs = require('fs');

// Fonction utilitaire pour récupérer tous les fichiers TS dans la structure donnée
// function getConfigEntries(baseDir = '../src') {
//     const modules = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

//     const configs = [];

//     modules.forEach(moduleName => {
//         const modulePath = path.join(baseDir, moduleName);
//         const versions = fs.readdirSync(modulePath).filter(f => fs.statSync(path.join(modulePath, f)).isDirectory());
//         versions.forEach(version => {
//             const versionPath = path.join(modulePath, version);
//             const files = fs.readdirSync(versionPath).filter(f => f.endsWith('.ts'));
//             files.forEach(file => {
//                 const inputPath = path.join(versionPath, file);
//                 const outputDir = path.join('generate', 'schema', moduleName, version);
//                 const outputFile = file.replace(/^I/, '').replace(/\.ts$/, '.zod.ts');
//                 const outputPath = path.join(outputDir, outputFile);


//                 configs.push({
//                     name: `${moduleName}_${version}_${file}`,
//                     input: inputPath.replace(/\\/g, '/'),
//                     output: outputPath.replace(/\\/g, '/'),
//                 });
//             });
//         });
//     });

//     return configs;
// }

// module.exports = getConfigEntries();



function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(filePath));
      } else if (file.endsWith('.ts') && file.startsWith('I')) {
        results.push(filePath);
      }
    });
    return results;
  }
  
  const baseDir = path.resolve(__dirname, '..');
  const interfaceDir = path.resolve(baseDir, 'src', 'interface');
  const interfaces = walk(interfaceDir).map(f => path.relative(interfaceDir, f));

  // const moduless = fs.readdirSync(interfaceDir).filter(f => fs.statSync(path.join(interfaceDir, f)).isDirectory());
  
  const config = interfaces.map(f => {
    // extraire module et version à partir du path type Account/v1/IAccountDTO.ts
    const parts = f.split(path.sep);
    const moduleName = parts[0];

    let version = parts[1];
    let fileName = "";
    let shortFileName = "";
    let data = {};

    if (version.startsWith("v")) {
      fileName = parts[2].replace(/^I/, '').replace(/DTO/, '').replace(/\.ts$/, 'Schema.zod.ts');
      shortFileName =  parts[2].replace(/^I/, '').replace(/DTO/, '').replace(/\.ts$/, 'Schema');

      data = {
        name: shortFileName,
        input: 'src/interface/' + f.replace(/\\/g, '/'),
        output:  `generate/schema/${moduleName}/${version}/${fileName}`
      };

    } else  {
      // Shared
      version = '';
      fileName = parts[1].replace(/^I/, '').replace(/DTO/, '').replace(/\.ts$/, 'Schema.zod.ts');
      shortFileName =  parts[1].replace(/^I/, '').replace(/DTO/, '').replace(/\.ts$/, 'Schema');

      data = {
        name: shortFileName,
        input: 'src/interface/' + f.replace(/\\/g, '/'),
        output:  `generate/schema/${moduleName}/${fileName}`
      };
    }
   
    // AccountSchema_v1
    // let data = {
    //   // name: `${moduleName}_${version}_${fileName}`,
    //   name: shortFileName,
    //   // input: '../src/interface/' + f.replace(/\\/g, '/'),
    //   // output:  `../generate/schema/${moduleName}/${version}/${fileName}`
    //   input: 'src/interface/' + f.replace(/\\/g, '/'),
    //   output:  `generate/schema/${moduleName}/${version}/${fileName}`
    // };

    return data;
  });
  
  // fs.writeFileSync(path.join(baseDir, 'scripts', 'ts-to-zod.config.json'), JSON.stringify(config, null, 2));
  // console.log('Config generated in scripts/ts-to-zod.config.json');

  const configContent = `/**
  * ts-to-zod configuration.
  *
  * @type {import("ts-to-zod").TsToZodConfig}
  */
 module.exports = ${JSON.stringify(config, null, 2)};
 `;

  fs.writeFileSync(path.join(baseDir, 'scripts', 'ts-to-zod.config.cjs'), configContent);
  console.log('Config generated in scripts/ts-to-zod.config.cjs');