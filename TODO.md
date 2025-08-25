# Interface
- Définir les « Contrainte/Restriction » sur les propriétés (maxLength, minLength, Length) via JDocHeader
- Réviser l'ensembles des interfaces et voir a traité « NotImplemented » ?

# Generateur
- Générer des schéma a partir des propriétés des interfaces
- Génération des classes de validations a partir des interfaces et en utilisant les schemas
- Nettoyage des anciens fichier
- Traitement des interfaces Global dans la génération des « index.ts »
- Voir la génération de Header des fichiers pour les cas autres que « Index »

# Schema
- Faire les schéma manquants

# Validateur
- Faire les validateurs manquants

# Test
- Réviser/Ajouts es scénarios de tests


# Utilisation ts-to-zod
- ts-to-zod supporter les JsDoc tag tel que minLength, maxLength, etc.
- Génération unique
`npx ts-to-zod chemin/vers/interfaces.ts chemin/vers/generated-schemas.ts`

- Possibilité d'utilise un fichhier de config `ts-to-zod.config.js`
- Traité ensuite avec `npx ts-to-zod`

# JsDoc Tags
- Voir `JSDocTag.md`

# Ancienne notes
- Generator entité
  - si le type contient « I_Global» alors ajouté import
  - si le type contient « I_» ne pas ajouté import.
  - Exclude si « Map »

- Voir si ça serait possible de générer le « index.ts » de Nv1
- Voir si possible de générer les validateur

https://www.perplexity.ai/search/est-ce-possible-de-definir-des-de92DfJ1TAK4e6ziQwDvag
