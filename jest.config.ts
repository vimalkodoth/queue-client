/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@vimal_madhavan/queue-client': '<rootDir>/src/index.ts',
  },
};
