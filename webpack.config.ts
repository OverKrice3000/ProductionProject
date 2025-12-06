import path from 'path';
import type { BuildEnv, BuildMode, BuildOptions, BuildPaths } from "./config/build/types/config";
import { BuildType } from "./config/build/types/config";
import { createWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  console.log(env);

  const paths: BuildPaths = {
    entry: path.join(__dirname, `src`, `index.tsx`),
    build: path.join(__dirname, `build`),
    html: path.join(__dirname, `public`, `index.html`),
    src: path.join(__dirname, `src`),
  };

  const mode: BuildMode = env.mode ?? `development`;
  const port = env.port ?? 3000;

  const isDev = mode === `development`;

  const buildType = (env.WEBPACK_SERVE === true) ? BuildType.SERVE : BuildType.BUILD;

  const buildOptions: BuildOptions = {
    paths,
    mode,
    isDev,
    port,
    buildType,
  };

  return createWebpackConfig(buildOptions);
};
