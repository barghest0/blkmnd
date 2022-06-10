export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  rootDir: './src',
  moduleNameMapper: {
    '^shared(.*)$': '<rootDir>/shared/$1',
    '^components(.*)$': '<rootDir>/components/$1',
    '^hooks(.*)$': '<rootDir>/hooks/$1',
    '^reduxStore(.*)$': '<rootDir>/redux/$1',
  },
  "setupFilesAfterEnv": [
    "<rootDir>/test-utils/setupTests.ts"
  ],
  transform: {
    '^.+\\.svg$': 'jest-transform-stub',
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
