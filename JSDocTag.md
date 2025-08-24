
Voici les JSDoc tags supportés par **ts-to-zod** pour générer des validateurs Zod supplémentaires, inspirés d’OpenAPI, qui peuvent être ajoutés aux interfaces/types pour enrichir la validation automatique :

| JSDoc tag          | Exemple                                         | Validation Zod générée                                  |
|--------------------|------------------------------------------------|--------------------------------------------------------|
| `@minimum`         | `@minimum 42`                                   | `.min(42)`                                             |
| `@maximum`         | `@maximum 42 Must be < 42`                      | `.max(42, "Must be < 42")`                             |
| `@minLength`       | `@minLength 42`                                 | `.min(42)`                                             |
| `@maxLength`       | `@maxLength 42`                                 | `.max(42)`                                             |
| `@format`          | `@format email`                                 | `.email()` ou autres formats standard (date, uuid, etc.) |
| `@pattern`         | `@pattern ^hello`                               | `.regex(/^hello/)` (pas de message d’erreur personnalisé possible) |
| `@description`     | `@description Full name`                        | `.describe("Full name")`                               |
| `@default`         | `@default 42`                                   | `.default(42)`                                         |
| `@strict`          | `@strict`                                       | `.strict()`                                            |
| `@schema`          | `@schema .catch('foo')`                         | Ajoute la méthode `.catch('foo')` ou remplace le schéma généré |

***

Pour les unions discriminées :

| JSDoc tag          | Exemple                                         | Validation Zod générée                                  |
|--------------------|------------------------------------------------|--------------------------------------------------------|
| `@discriminator`   | `@discriminator type`                           | Génère un `z.discriminatedUnion("type", [...])`       |

***

Pour les éléments d’un tableau (chaque élément) :

| JSDoc tag              | Validation Zod générée                            |
|------------------------|------------------------------------------------|
| `@elementMinLength`     | `.array(z.string().min(x))`                      |
| `@elementMaxLength`     | `.array(z.string().max(x))`                      |
| `@elementMinimum`       | `.array(z.number().min(x))`                      |
| `@elementMaximum`       | `.array(z.number().max(x))`                      |
| `@elementFormat`        | `.array(z.string().<format>())`                  |
| `@elementPattern`       | `.array(z.string().regex(/pattern/))`            |
| `@elementDescription`   | `.array(...).describe("...")`                     |

***

Ces tags sont à écrire dans tes commentaires JSDoc avant la déclaration des propriétés dans les interfaces TypeScript. L’outil va les interpréter pour générer les contraintes et méthodes Zod correspondantes dans les schémas.

Tu peux aussi définir des formats personnalisés via la config pour reconnaître des formats spécifiques.

***

Pour plus d’informations, tu peux consulter la documentation officielle du package ts-to-zod :  
https://www.npmjs.com/package/ts-to-zod (section JSDoc tags)

Cela te permet d’avoir une génération automatique de schémas avec des validations précises tout en gardant tes types TypeScript comme source de vérité.[1][3]

[1](https://www.npmjs.com/package/ts-to-zod)
[2](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
[3](https://www.npmjs.com/package/ts-to-zod/v/3.1.0)
[4](https://github.com/fabien0102/ts-to-zod/issues/124)
[5](https://stackoverflow.com/questions/76354177/how-to-infer-zod-type-in-jsdoc-without-typescript)
[6](https://github.com/colinhacks/zod/issues/200)
[7](https://dev.to/samuel-braun/boost-your-javascript-with-jsdoc-typing-3hb3)
[8](https://zod.dev)
[9](https://www.raulmelo.me/en/til/how-to-keep-jsdoc-with-zod-types)