import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    outDir: 'distPackage',
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV !== 'production',
    clean: true,
    // Générer des fichiers de déclaration TypeScript (.d.ts)
    dts: true,
    // This ensures each module file is treated as an entry point
    splitting: true,
    name: 'RiotEntity',
    // Formats de sortie : CommonJS et ESM
    format: ['cjs', 'esm'],
    target: 'node18',
    cjsInterop: true,
    noExternal: [],
});