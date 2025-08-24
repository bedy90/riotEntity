/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: 'node',
    verbose: false,
    preset: 'ts-jest',
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
        '^@/riotentity$': '<rootDir>/src/index',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    coveragePathIgnorePatterns: [
        '/scripts/',
    ],
};
