import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,

  testEnvironment: `jsdom`,

  coveragePathIgnorePatterns: [`/node_modules/`],

  moduleDirectories: [`node_modules`, `src`],

  moduleFileExtensions: [`js`, `jsx`, `ts`, `tsx`, `json`, `node`],

  rootDir: `../../`,

  testMatch: [`<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)`],

  transform: {
    "\\.[jt]sx?$": [`ts-jest`, { tsconfig: `../../tsconfig.json` }],
  },

  moduleNameMapper: {
    "\\.(scss)$": `identity-obj-proxy`,
    "\\.(svg)$": `<rootDir>/src/shared/utils/mockModules/mockReactComponent.tsx`,
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src/shared/utils/mockModules/mockFile.ts`,
    "^axios$": `axios/dist/node/axios.cjs`,
    "^@/(.*)$": `<rootDir>/src/$1`,
  },

  setupFilesAfterEnv: [`<rootDir>/config/jest/setupJest.ts`],

  globals: {
    __IS_DEV__: true,
    __API__: ``,
    __PROJECT__: `jest`,
  },

  reporters: [
    `default`,
    [
      `jest-html-reporters`,
      {
        publicPath: `<rootDir>/reports/unit`,
        filename: `report.html`,
        openReport: false,
        inlineSource: true,
      },
    ],
  ],
};

export default config;
