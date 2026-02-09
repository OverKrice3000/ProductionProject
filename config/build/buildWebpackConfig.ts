import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

import type { BuildOptions } from "./types/config";
import type { Configuration } from "webpack";

export function createWebpackConfig (buildOptions: BuildOptions): Configuration {
  const { mode, paths, isDev } = buildOptions;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: `[name].[contenthash].js`,
      clean: true,
      publicPath: `/`,
    },
    plugins: buildPlugins(buildOptions),
    resolve: buildResolvers(buildOptions),
    module: {
      rules: buildLoaders(buildOptions),
    },
    devtool: isDev ? `inline-source-map` : undefined,
    devServer: isDev ? buildDevServer(buildOptions) : undefined,
  };
}
