import type { Configuration } from "webpack";
import type { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

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
