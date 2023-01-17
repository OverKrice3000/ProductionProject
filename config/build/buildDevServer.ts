import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer (buildOptions: BuildOptions): DevServerConfiguration {
  return {
    port: buildOptions.port,
    historyApiFallback: true,
    open: true,
  };
}
