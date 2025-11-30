import { Configuration, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildSassLoader } from "../build/loaders/buildSassLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { excludeFileManagerSvgProcessing } from "../build/utils/excludeFileManagerSvgProcessing";

export default ({ config }: { config: Configuration; }) => {
  const paths: BuildPaths = {
    build: ``,
    html: ``,
    entry: ``,
    src: path.resolve(__dirname, `..`, `..`, `src`),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(`.ts`, `.tsx`);

  ((config.module?.rules) != null) && (config.module.rules = excludeFileManagerSvgProcessing(config.module.rules as RuleSetRule[]));

  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildSassLoader(true));

  return config;
};
