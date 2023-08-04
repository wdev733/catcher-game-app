const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  rootDir: './',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  coverageReporters: ['text'],
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    // do not collect for auto generated files
    '!<rootDir>/services/movie/*',
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
