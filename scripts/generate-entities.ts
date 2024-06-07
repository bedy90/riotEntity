import { Project, InterfaceDeclaration, PropertySignature } from 'ts-morph';
import * as glob from "glob";
import * as fs from "fs-extra";
import * as path from "path";

// Prepare project
const project = new Project();

// ****************************************
// Function
// ****************************************

// Fonction pour extraire les propriétés d'une interface, y compris celles héritées
function getAllProperties(iface: InterfaceDeclaration): PropertySignature[] {
  const properties: PropertySignature[] = [];

  // Ajouter les propriétés de l'interface actuelle
  properties.push(...iface.getProperties());

  // Parcourir les interfaces héritées
  iface.getExtends().forEach(heritageClause => {
    const extendedInterface = heritageClause.getType().getSymbol()?.getDeclarations()[0] as InterfaceDeclaration;
    if (extendedInterface) {
      properties.push(...getAllProperties(extendedInterface));
    }
  });

  return properties;
}

// Fonction pour extraire les informations JSDoc d'une interface
function extractJsDocInfo(iface: InterfaceDeclaration) {
  const jsDocTags = iface.getJsDocs().flatMap(doc => doc.getTags());
  const namespaceTag = jsDocTags.find(tag => tag.getTagName() === "namespace");
  const versionTag = jsDocTags.find(tag => tag.getTagName() === "version");
  const nameTag = jsDocTags.find(tag => tag.getTagName() === "name");
  const NotImplementedTag = jsDocTags.find(tag => tag.getTagName() === "NotImplemented");

  const namespace = namespaceTag?.getComment() || null;
  const version = versionTag?.getComment() || null;
  const name = nameTag?.getComment() || null;
  const NotImplemented = (NotImplementedTag != null ? true : false);

  return { namespace, version, name, NotImplemented };
}

function processInterfaceToClass() {

  // Read all interface files
  const interfaceFiles = glob.sync("src/interface/**/*.ts");

  // Process
  interfaceFiles.forEach(filePath => {
    const sourceFile = project.addSourceFileAtPath(filePath);
    const interfaces = sourceFile.getInterfaces();

    interfaces.forEach(iface => {
      const interfaceName = iface.getName();
      const baseName = iface?.getSourceFile()?.getBaseName() || "Unknown";

      if (baseName.toLowerCase().includes('index.ts') || baseName.toLowerCase().includes('_global')) {
        return;
      }

      if (interfaceName.startsWith("I")) {
        const className = interfaceName.substring(1);

        // JDoc
        // const namespace1 = iface.getJsDocs()[0]?.getTags()[0]?.getComment() || "Unknown";
        // const version1 = iface.getJsDocs()[0]?.getTags()[1]?.getComment() || "Unknown";
        // const name1 = iface.getJsDocs()[0]?.getTags()[2]?.getComment() || "Unknown";

        // Extraire les informations JSDoc
        const { namespace, version, name, NotImplemented } = extractJsDocInfo(iface);
        if (!namespace || !version || !name) {
          console.warn(`[WARN] Interface ${interfaceName} can't be transformed into a class, as its JDOC is not declared.`)
          return;
        }
        if (NotImplemented) {
          console.warn(`[WARN] Interface ${interfaceName} isn't implemented.`)
          return;
        }

        // GEt Properties (basic)
        // const properties = iface.getProperties();

        // Obtenir toutes les propriétés (y compris héritées)
        const properties = getAllProperties(iface);

        // Générer le contenu de la classe
        let classContent = `import { Interfaces } from '@/riotentity';\n\n`;
        classContent += `export class ${className} implements Interfaces.${namespace}.${version}.${name} {\n`;

        properties.forEach((property: PropertySignature) => {
          const propName = property.getName();
          classContent += `  ${propName}!: ${property.getType().getText()};\n`;
        });

        classContent += `}\n`;

        // Déterminer le chemin de sortie
        const relativePath = path.relative("src/interface", filePath);
        const outputPath = path.join("generate", "entity", relativePath);
        const outputDir = path.dirname(outputPath);
        const outputFile = path.join(outputDir, `${className}.ts`);

        // Créer le répertoire de sortie si nécessaire
        fs.ensureDirSync(outputDir);

        // Écrire le fichier de classe
        fs.writeFileSync(outputFile, classContent);

        console.log(`[SUCCESS] Class ${interfaceName} has been generated.`)
      }
    });
  });

  // console.log("Classes générées avec succès !");
}

// ****************************************
//  Process
// ****************************************
processInterfaceToClass();