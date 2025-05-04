/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: 'node',
    verbose: false,
    preset: 'ts-jest',
    // Ajoute ceci pour NodeNext/ESM :
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    // Default
    // transform: {
    //   "^.+\.tsx?$": ["ts-jest", {}],
    // },
    testMatch: [
        '**/?(*.)+(test).ts',
    ],
    coveragePathIgnorePatterns: [
        '/scripts/',
    ],
};
