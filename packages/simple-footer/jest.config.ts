import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const swcOptions = {
  jsc: {
    transform: {
      react: {
        importSource: 'react',
        runtime: 'automatic',
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        throwIfNamespace: true,
        useBuiltins: true,
        development: process.env.NODE_ENV === 'development',
      },
    },
  },
}

const config: InitialOptionsTsJest = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcOptions],
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^types/(.*)$': '<rootDir>/types/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
    '^stories/(.*)$': '<rootDir>/stories/$1',
  },
}

export default config
