# Outdated Dependencies

This report details the outdated dependencies found in your project.

<details>
  <summary><strong>Types of depreciation</strong></summary>

Changelog entries are classified using the following labels _(from [keep-a-changelog](http://keepachangelog.com/)_):

- `current`: The current version installed in your project.
- `wanted`: The version specified in your `package.json` or `package-lock.json`.
- `latest`: The latest available version on the npm registry.

</details>

<details>
  <summary><strong>Outdated dependency lists</strong></summary>

| PackageName | Current | Wanted | Latest |
|---|---|---|---|
{% for dependency in data %}
| {{ dependency.name }} | {{ dependency.current }} | {{ dependency.wanted }} | {{ dependency.latest }}
{% endfor %}

<details> 

# Note
Please consider updating these dependencies.