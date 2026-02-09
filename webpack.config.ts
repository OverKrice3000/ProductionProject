import path from 'path';

import { BuildType } from "./config/build/types/config";
import { createWebpackConfig } from "./config/build/buildWebpackConfig";

import type { BuildEnv, BuildMode, BuildOptions, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  console.log(env);

  const paths: BuildPaths = {
    entry: path.join(__dirname, `src`, `index.tsx`),
    build: path.join(__dirname, `build`),
    html: path.join(__dirname, `public`, `index.html`),
    src: path.join(__dirname, `src`),
    locales: path.join(__dirname, `public`, `locales`),
    buildLocales: path.join(__dirname, `build`, `locales`),
  };

  const mode: BuildMode = env.mode ?? `development`;
  const port = env.port ?? 3000;
  const apiUrl = env.apiUrl ?? `http://localhost:8000`;

  const isDev = mode === `development`;

  const buildType = (env.WEBPACK_SERVE === true) ? BuildType.SERVE : BuildType.BUILD;
  const project = `frontend`;

  const buildOptions: BuildOptions = {
    paths,
    mode,
    isDev,
    port,
    buildType,
    project,
    apiUrl,
  };

  return createWebpackConfig(buildOptions);
};
