import type webpack from "webpack";
import type { BuildOptions } from "./types/config";
import { buildSassLoader } from "./loaders/buildSassLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildTypescriptLoader } from "./loaders/buildTypescriptLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";

export function buildLoaders (buildOptions: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = buildOptions;

  const typescriptLoader: webpack.RuleSetRule = buildTypescriptLoader(isDev);
  const babelLoader: webpack.RuleSetRule = buildBabelLoader();
  const sassLoader = buildSassLoader(isDev);
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    sassLoader,
  ];
}
