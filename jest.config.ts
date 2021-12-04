import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const config: InitialOptionsTsJest = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^types/(.*)$': '<rootDir>/types/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
    // 'test-utils': '<rootDir>/test/utils',
  },
}

export default config
