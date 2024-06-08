import { Project, InterfaceDeclaration, PropertySignature, TypeAliasDeclaration } from 'ts-morph';
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
function extractJsDocInfo(iface: InterfaceDeclaration | TypeAliasDeclaration) {
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

function extractJsDocInfo2(iface: InterfaceDeclaration) {
  const jsDoc = iface.getJsDocs()[0]?.getInnerText() || '';
  const namespaceMatch = /@namespace\s+(\S+)/.exec(jsDoc);
  const versionMatch = /@version\s+(\S+)/.exec(jsDoc);
  const nameMatch = /@name\s+(\S+)/.exec(jsDoc);
  const notImplementedMatch = /@NotImplemented\s+(\S+)/.exec(jsDoc);

  return {
    namespace: namespaceMatch ? namespaceMatch[1] : null,
    version: versionMatch ? versionMatch[1] : null,
    name: nameMatch ? nameMatch[1] : null,
    notImplemented: notImplementedMatch ? true : false,
  };
}

// Fonction pour extraire les types personnalisés des propriétés d'une interface
function getCustomAndGlobalTypes(properties: PropertySignature[]): { customTypes: Set<string>, globalTypes: Set<string> } {
  const customTypes = new Set<string>();
  const globalTypes = new Set<string>();

  properties.forEach(property => {
    const propType = property.getTypeNode()?.getText() || '';
    const matches = propType.match(/\b[A-Z][a-zA-Z0-9_]*\b/g);

    if (matches) {
      matches.forEach(type => {
        // Exclure les types contenant « Interfaces » ainsi que les types primitifs et globaux
        if (!propType.includes('Interfaces.') && !['string', 'number', 'boolean', 'any', 'undefined', 'null', 'void', 'never', 'object', 'unknown', 'map'].includes(type.toLowerCase())) {
          // Split customType and globalTypes
          if (type.toLowerCase().includes("_global")) {
            globalTypes.add(type);
          } else {
            customTypes.add(type);
          }
        }
      });
    }

  });

  return { customTypes, globalTypes };
}

// ****************************************
//  Process function
// ****************************************
function processInterface(interfaces: InterfaceDeclaration[], filePath: string) {
  interfaces.forEach((iface: InterfaceDeclaration) => {
    const interfaceName = iface.getName();
    const baseName = iface?.getSourceFile()?.getBaseName() || "Unknown";

    if (baseName.toLowerCase().includes('index.ts') || baseName.toLowerCase().includes('_global')) {
      return;
    }

    if (interfaceName.startsWith("I")) {
      const className = interfaceName.substring(1);

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

      // Obtenir toutes les propriétés (y compris héritées)
      const properties = getAllProperties(iface);

      // Obtenir les types personnalisés
      const { customTypes, globalTypes } = getCustomAndGlobalTypes(properties);

      // Générer le contenu de la classe
      let classContent = `import { Interfaces } from '@/riotentity';\n`;
      if (customTypes.size > 0) {
        classContent += `import { ${[...customTypes].join(', ')} } from '@/riotentity';\n`;
      }

      if (globalTypes.size > 0) {
        globalTypes.forEach(globalType => {
          const globalImportPath = `@/src/interface/_Global/${globalType}`;
          classContent += `import { ${globalType} } from '${globalImportPath}';\n`;
        });
      }

      // Declare export header
      classContent += `\nexport class ${className} implements Interfaces.${namespace}.${version}.${name} {\n`;

      // Declare properties
      properties.forEach((property: PropertySignature) => {
        const propName = property.getName();
        const propType = property.getTypeNode()?.getText() || 'any';
        classContent += `    ${propName}!: ${propType};\n`;
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

      console.log(`[SUCCESS] Class ${className} has been generated from the interface.`)
    }
  });
}

function processTypeAliases(typeAliases: TypeAliasDeclaration[], filePath: string) {
  typeAliases.forEach((typeAlias: TypeAliasDeclaration) => {
    const typeName = typeAlias.getName();
    const globalType = typeAlias.getTypeNode()?.getText();
    if (typeName.startsWith("I") && typeAlias.getTypeNode()?.getText()?.includes("_Global")) {
      const className = typeName.substring(1);

      // Extraire les informations JSDoc
      const { namespace, version, name, NotImplemented } = extractJsDocInfo(typeAlias);
      if (!namespace || !version || !name) {
        console.warn(`[WARN] Types ${typeName} can't be transformed into a class, as its JDOC is not declared.`)
        return;
      }
      if (NotImplemented) {
        console.warn(`[WARN] Types ${typeName} isn't implemented.`)
        return;
      }

      // const globalType: string | undefined = typeAlias.getTypeNode()?.getText();
      if (!globalType || globalType.length == 0) {
        return;
      }

      // Puisque ce type est juste un alias, nous devons générer les propriétés de l'interface globale
      const globalInterface = project.getSourceFileOrThrow(path.join("src/interface/", "_Global/" + globalType + ".ts")).getInterfaceOrThrow(globalType.replace(/<.*>$/, ''));
      const properties = getAllProperties(globalInterface);

      // Obtenir les types personnalisés
      const { customTypes, globalTypes } = getCustomAndGlobalTypes(properties);

      // Générer le contenu de la classe
      let classContent = `import { Interfaces } from '@/riotentity';\n`;

      if (customTypes && customTypes.size > 0) {
        classContent += `import { ${[...customTypes].join(', ')} } from '@/riotentity';\n`;
      }

      if (globalTypes && globalTypes.size > 0) {
        globalTypes.forEach(globalType => {
          const globalImportPath = `@/src/interface/_Global/${globalType}`;
          classContent += `import { ${globalType} } from '${globalImportPath}';\n`;
        });
      }

      classContent += `\nexport class ${className} implements Interfaces.${namespace}.${version}.${name} {\n`;

      properties.forEach((property: PropertySignature) => {
        const propName = property.getName();
        const propType = property.getTypeNode()?.getText() || 'any';
        classContent += `    ${propName}!: ${propType};\n`;
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

      console.log(`[SUCCESS] Class ${className} has been generated  from the type.`)
    }
  });
}

function processInterfaceToClass() {

  // Read all interface files
  const interfaceFiles = glob.sync("src/interface/**/*.ts");

  // Process
  interfaceFiles.forEach((filePath: string) => {
    const sourceFile = project.addSourceFileAtPath(filePath);
    const interfaces: InterfaceDeclaration[] = sourceFile.getInterfaces();
    const typeAliases: TypeAliasDeclaration[] = sourceFile.getTypeAliases();

    if (interfaces && interfaces.length > 0) {
      processInterface(interfaces, filePath);
    }

    if (typeAliases && typeAliases.length > 0) {
      processTypeAliases(typeAliases, filePath);
    }

    // interfaces.forEach(iface => {
    //   const interfaceName = iface.getName();
    //   const baseName = iface?.getSourceFile()?.getBaseName() || "Unknown";

    //   if (baseName.toLowerCase().includes('index.ts') || baseName.toLowerCase().includes('_global')) {
    //     return;
    //   }

    //   if (interfaceName.startsWith("I")) {
    //     const className = interfaceName.substring(1);

    //     // Extraire les informations JSDoc
    //     const { namespace, version, name, NotImplemented } = extractJsDocInfo(iface);
    //     if (!namespace || !version || !name) {
    //       console.warn(`[WARN] Interface ${interfaceName} can't be transformed into a class, as its JDOC is not declared.`)
    //       return;
    //     }
    //     if (NotImplemented) {
    //       console.warn(`[WARN] Interface ${interfaceName} isn't implemented.`)
    //       return;
    //     }

    //     // Obtenir toutes les propriétés (y compris héritées)
    //     const properties = getAllProperties(iface);

    //     // Obtenir les types personnalisés
    //     const { customTypes, globalTypes } = getCustomAndGlobalTypes(properties);
    //     // const globalInterfaces = getGlobalInterfaces(iface);

    //     // Générer le contenu de la classe
    //     let classContent = `import { Interfaces } from '@/riotentity';\n`;
    //     if (customTypes.size > 0) {
    //       classContent += `import { ${[...customTypes].join(', ')} } from '@/riotentity';\n`;
    //     }

    //     if (globalTypes.size > 0) {
    //       globalTypes.forEach(globalType => {
    //         const globalImportPath = `@/src/interface/_Global/${globalType}`;
    //         classContent += `import { ${globalType} } from '${globalImportPath}';\n`;
    //       });
    //     }

    //     // Declare export header
    //     classContent += `\nexport class ${className} implements Interfaces.${namespace}.${version}.${name} {\n`;

    //     // Declare properties
    //     properties.forEach((property: PropertySignature) => {
    //       const propName = property.getName();
    //       const propType = property.getTypeNode()?.getText() || 'any';
    //       classContent += `    ${propName}!: ${propType};\n`;
    //     });
    //     classContent += `}\n`;


    //     // Déterminer le chemin de sortie
    //     const relativePath = path.relative("src/interface", filePath);
    //     const outputPath = path.join("generate", "entity", relativePath);
    //     const outputDir = path.dirname(outputPath);
    //     const outputFile = path.join(outputDir, `${className}.ts`);

    //     // Créer le répertoire de sortie si nécessaire
    //     fs.ensureDirSync(outputDir);

    //     // Écrire le fichier de classe
    //     fs.writeFileSync(outputFile, classContent);

    //     console.log(`[SUCCESS] Class ${interfaceName} has been generated.`)
    //   }
    // });


  });

  // console.log("Classes générées avec succès !");
}

// ****************************************
//  Process
// ****************************************
processInterfaceToClass();