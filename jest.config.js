/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    testEnvironment: 'node',
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    resolver: 'ts-jest-resolver',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
      },
    verbose: false,
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
        '^@/riotentity$': '<rootDir>/src/index.ts',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    coveragePathIgnorePatterns: ['/scripts/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};