const _ = require('lodash');

process.env.MOCK_API_PORT = process.env.MOCK_API_PORT || _.random(9000, 9999);

module.exports = {
  setupFiles: ['<rootDir>/tests/unit/setup'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/unit/matchers',
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  testURL: process.env.API_BASE_URL || `http://localhost:${process.env.MOCK_API_PORT}`,
};
