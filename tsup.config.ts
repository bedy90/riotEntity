import { defineConfig } from 'tsup';

export default defineConfig({
  // entry: ['src/*/**.ts'],
  entry: ['src/index.ts'],
  outDir: 'distPackage',
  minify: process.env.NODE_ENV === 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  clean: true,
  dts: false,
  // splitting: true, // This ensures each module file is treated as an entry point
  name: 'RiotEntity',
  format: ['cjs'],
  target: 'node18',
  cjsInterop: true,
  noExternal: [],
});