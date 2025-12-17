import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,

  testEnvironment: `jsdom`,

  coveragePathIgnorePatterns: [
    `/node_modules/`,
  ],

  moduleDirectories: [
    `node_modules`,
    `src`,
  ],

  moduleFileExtensions: [
    `js`,
    `jsx`,
    `ts`,
    `tsx`,
    `json`,
    `node`,
  ],

  rootDir: `../../`,

  testMatch: [
    `<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)`,
  ],

  transform: {
    "\\.[jt]sx?$": [`ts-jest`, { tsconfig: `../../tsconfig.json` }],
  },

  moduleNameMapper: {
    "\\.(scss)$": `identity-obj-proxy`,
    "\\.(svg)$": `<rootDir>/src/shared/utils/mockModules/mockReactComponent.tsx`,
    "^axios$": `axios/dist/node/axios.cjs`,
  },

  setupFilesAfterEnv: [`<rootDir>/config/jest/setupJest.ts`],

  globals: {
    __IS_DEV__: true,
    __API__: ``,
    __PROJECT__: `jest`,
  },
};

export default config;
