/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@vimalkodoth/queue-client': '<rootDir>/src/index.ts',
  },
};
