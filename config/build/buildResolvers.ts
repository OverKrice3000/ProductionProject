import type webpack from "webpack";
import type { BuildOptions } from "./types/config";

export function buildResolvers (buildOptions: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [`.js`, `.ts`, `.tsx`],
    preferAbsolute: true,
    modules: [buildOptions.paths.src, `node_modules`],
    mainFiles: [`index`],
    alias: {
      '@': buildOptions.paths.src,
    },
  };
}
