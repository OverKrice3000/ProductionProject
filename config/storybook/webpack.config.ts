import type { Configuration, RuleSetRule } from "webpack";
import webpack from "webpack";
import type { BuildPaths } from "../build/types/config";
import path from "path";
import { buildSassLoader } from "../build/loaders/buildSassLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { excludeFileManagerSvgProcessing } from "../build/utils/excludeFileManagerSvgProcessing";
import { BuildAsyncMockPlugin } from "../build/plugins/buildAsyncMockPlugin";

export default ({ config }: { config: Configuration; }) => {
  const paths: BuildPaths = {
    build: ``,
    html: ``,
    entry: ``,
    src: path.resolve(__dirname, `..`, `..`, `src`),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(`.ts`, `.tsx`);

  config.resolve && (config.resolve.plugins = config.resolve.plugins ?? []);
  config.resolve?.plugins?.push(new BuildAsyncMockPlugin());

  ((config.module?.rules) != null) && (config.module.rules = excludeFileManagerSvgProcessing(config.module.rules as RuleSetRule[]));

  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildSassLoader(true));

  config.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(``),
  }));

  return config;
};
