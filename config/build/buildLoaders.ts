import { buildSassLoader } from "./loaders/buildSassLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";

import type { BuildOptions } from "./types/config";
import type webpack from "webpack";

export function buildLoaders (buildOptions: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = buildOptions;

  const babelLoader = buildBabelLoader(buildOptions);
  const tsxBabelLoader = buildBabelLoader({ ...buildOptions, isTsx: true });
  const sassLoader = buildSassLoader(isDev);
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsxBabelLoader,
    sassLoader,
  ];
}
