# Mises Outdated Dependencies

{{#if major.length}}
### Major Updates:
| Package Name | Current Version | Wanted Version | Latest Version |
|--------------|-----------------|----------------|----------------|
{{#each major}}
| {{this.name}} | {{this.current}} | {{this.wanted}} | {{this.latest}} |
{{/each}}
{{/if}}

{{#if minor.length}}
### Minor Updates:
| Package Name | Current Version | Wanted Version | Latest Version |
|--------------|-----------------|----------------|----------------|
{{#each minor}}
| {{this.name}} | {{this.current}} | {{this.wanted}} | {{this.latest}} |
{{/each}}
{{/if}}

{{#if patch.length}}
### Patch Updates:
| Package Name | Current Version | Wanted Version | Latest Version |
|--------------|-----------------|----------------|----------------|
{{#each patch}}
| {{this.name}} | {{this.current}} | {{this.wanted}} | {{this.latest}} |
{{/each}}
{{/if}}

# Note
Please consider updating these dependencies.