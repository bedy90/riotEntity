
# Note
`export class XYZ` : Cette syntaxe exporte explicitement la classe **XYZ**. Lors de l'importation, elle doit être importée sous le nom exact de XYZ.

`export default class XYZ` : Cette syntaxe exporte la classe **XYZ** en tant qu'élément par défaut. Lors de l'importation, elle peut être importée sous n'importe quel nom, car elle est l'élément par défaut exporté par le fichier

`export const XYZ` : Synxtaxe permet l'export d'un objet/variable **XYZ** pour qu'il soit utilisable ailleurs.


# Déclaration
    ! : assertion de non-nullabilité
    ? : propriété optionnelle, peut être "null" ou "undefined".


# Obtenir arborescensces
`tree /f > arb.txt`

# Valider le filePath git (case-senstive)
`git ls-files`

#  Rechercher les fichiers qui diffères aux niveau du Case-sentives
`git ls-files | sort /I | findstr /I /R /C:"\(.*\)\n\1"`

# consulter la config git
`git config core.ignorecase`
Windows : true

## Changer la valeur
`git config core.ignorecase false`

# Corriger les conflits
`git mv --cached NomFichier NomFICHIER`


# Gestion jest
npx jest --config jest.config.js

npx jest --clearCache

npx jest --config=jest.config.js --showConfig

# Fichier INDEX

Pour exporter une Interface, il faut utilisé `export type`
```ts
export type IAccountDTO = IAccountDTO_v1;
```

Pour exporter une classe, il faut utilisé `export const`
```ts
export const AccountValidator = AccountValidator_v1;
```

# build
`tsc -p tsconfig.build.json`

npx ts-node --show-config

npx ts-node -r tsconfig-paths/register src/manual_test.ts

# Exportation

## Interface

**Note :** Les interfaces sont effacées au runtime, mais accessibles via les fichiers `.d.ts` générés

Exportation d'une interface
```ts
export interface IUser {

}
```

Exportation d'une interface pour qu'elle soit disponible dans d'autre module
```ts
export type IUser {

}
```

## Classe

Export : `export class` permet d’exporter la classe.


### Autre info
module `NodeNext` (ou `Node16`) comprends
 - modules CommonJS (require/module.exports) 
 - modules ES Modules (import/export). 


 `NodeNext` pour avoir le code le plus a jour.
 
 ```
"target": "es2022", // Ou "esnext" si vous êtes très à jour
    "moduleResolution": "NodeNext", // Très important d'ajouter ceci aussi
 ```