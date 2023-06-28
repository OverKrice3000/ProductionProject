export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  paths: BuildPaths;
  mode: BuildMode;
  isDev: boolean;
  port: number;
  buildType: BuildType;
}

export interface BuildEnv {
  WEBPACK_SERVE?: boolean;
  WEBPACK_BUILD?: boolean;
  mode?: BuildMode;
  port?: number;
}

export enum BuildType {
  BUILD = `build`,
  SERVE = `serve`
}
