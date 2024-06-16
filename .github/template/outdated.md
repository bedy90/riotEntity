# Outdated Dependencies

This report details the outdated dependencies found in your project.

**Legend:**

* `current`: The current version installed in your project.
* `wanted`: The version specified in your `package.json` or `package-lock.json`.
* `latest`: The latest available version on the npm registry.

{% for dependency in data %}
### {{ dependency }}

| Field | Value |
|---|---|
| Current | {{ dependency.current }} |
| Wanted | {{ dependency.wanted }} |
| Latest | {{ dependency.latest }} |

{% endfor %}



# Mises Outdated Dependencies

<!-- {{#if major.length}}
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
Please consider updating these dependencies. -->