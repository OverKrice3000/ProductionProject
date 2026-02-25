import type webpack from "webpack";

interface BabelLoaderOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isTsx = false }: BabelLoaderOptions): webpack.RuleSetRule => ({
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
