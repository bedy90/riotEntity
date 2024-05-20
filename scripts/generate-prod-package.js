const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

// Faire une copie du package.json
const prodPackage = { ...packageJson };

const filePath = path.join(__dirname, '..', 'build', 'package.json');

// Supprimer les devDependencies
delete prodPackage.devDependencies;

// Autres modifications souhaitées, par exemple :
prodPackage.scripts = {
  start: 'node index.js'
};

prodPackage.main = "index.js";
prodPackage.types = "index.d.ts";
prodPackage.files = ["**","changelog.md","readme.md"];

// Créer le fichier s'il n'existe pas
try {
    // './build/package.json'
    fs.openSync(filePath, 'a+');
  } catch (e) {
    console.error('Erreur lors de la création du fichier (PROD) package.json :', e);
    process.exit(1);
  }

// Écrire le package-prod.json
fs.writeFileSync(filePath, JSON.stringify(prodPackage, null, 2), 'utf8');
console.log('(PROD) package.json généré avec succès dans le répertoire build');

try {
  fs.existsSync(filePath);
  console.log('Le fichier « build/package.json » existe.')
} catch (e) {
  console.error('Erreur lors de la validation du fichier (PROD) package.json :', e);
  process.exit(1);
}
