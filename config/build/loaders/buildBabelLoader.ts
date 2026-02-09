import type webpack from "webpack";
import type { BuildOptions } from "../types/config";

interface BabelLoaderOptions extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isTsx }: BabelLoaderOptions): webpack.RuleSetRule => ({
  test: isTsx ? /\.([tj])sx$/ : /\.([tj])s$/,
  exclude: /node_modules/,
  use: {
    loader: `babel-loader`,
    options: {
      cacheDirectory: true,
      presets: [`@babel/preset-env`],
      plugins: [
        [
          `@babel/plugin-transform-typescript`,
          {
            isTsx,
          },
        ],
        `@babel/plugin-transform-runtime`,
      ],
    },
  },
});
