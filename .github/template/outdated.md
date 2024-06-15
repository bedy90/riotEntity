# Mises Outdated Dependencies

{{#if dependencies.major}}
## Mises à Jour Majeures
{{#each dependencies.major}}
- **Package:** {{this.name}}
  - **Version Actuelle:** {{this.current}}
  - **Version Souhaitée:** {{this.wanted}}
  - **Dernière Version:** {{this.latest}}
{{/each}}
{{/if}}

{{#if dependencies.minor}}
## Mises à Jour Mineures
{{#each dependencies.minor}}
- **Package:** {{this.name}}
  - **Version Actuelle:** {{this.current}}
  - **Version Souhaitée:** {{this.wanted}}
  - **Dernière Version:** {{this.latest}}
{{/each}}
{{/if}}

{{#if dependencies.patch}}
## Mises à Jour de Correctifs
{{#each dependencies.patch}}
- **Package:** {{this.name}}
  - **Version Actuelle:** {{this.current}}
  - **Version Souhaitée:** {{this.wanted}}
  - **Dernière Version:** {{this.latest}}
{{/each}}
{{/if}}

# Note
Please consider updating these dependencies.