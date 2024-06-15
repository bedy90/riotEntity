<script>
    export let headerImport: string[];
    export let namespaceName: string;
    export let namespaceVersion: string;
    export let expImps: string[];
</script>

<template>
    {#each headerImport as importPath}
      {importPath}
    {/each}
  
    export namespace {namespaceName} {{
      export namespace {namespaceVersion} {{
        {#each expImps as expImport}
          {expImport}
        {/each}
      }} 
    }}
</template>