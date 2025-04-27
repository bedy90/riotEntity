
# Note
`export class XYZ` : Cette syntaxe exporte explicitement la classe **XYZ**. Lors de l'importation, elle doit être importée sous le nom exact de XYZ.

`export default class XYZ` : Cette syntaxe exporte la classe **XYZ** en tant qu'élément par défaut. Lors de l'importation, elle peut être importée sous n'importe quel nom, car elle est l'élément par défaut exporté par le fichier


# Déclaration
    ! : assertion de non-nullabilité
    ? : propriété optionnelle, peut être "null" ou "undefined".


# TODO
- Generator entité
  - si le type contient « I_Global» alors ajouté import
  - si le type contient « I_» ne pas ajouté import.
  - Exclude si « Map »

- Voir si ça serait possible de générer le « index.ts » de Nv1
- Voir si possible de générer les validateur

# Obtenir arborescensces
tree /f > arb.txt