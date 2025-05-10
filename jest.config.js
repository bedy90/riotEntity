/* eslint-disable @typescript-eslint/no-require-imports */
// const { pathsToModuleNameMapper } = require('ts-jest');
// const { compilerOptions } = require('./tsconfig.json');

// console.log(pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }));

// console.log('Jest moduleNameMapper:', {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '^@/riotentity$': '<rootDir>/src/index',
// });

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: 'node',
    verbose: false,
    preset: 'ts-jest',
    modulePaths: ['<rootDir>/src'],
    // roots: ['<rootDir>/src', '<rootDir>/test'],
    moduleNameMapper: {
        '^@/riotentity$': '<rootDir>/src/index',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
    coveragePathIgnorePatterns: [
        '/scripts/',
    ],
};
