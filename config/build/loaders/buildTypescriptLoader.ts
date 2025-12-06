import type webpack from "webpack";

export const buildTypescriptLoader = (isDev: boolean): webpack.RuleSetRule => ({
  test: /\.tsx?$/,
  use: [
    {
      loader: `ts-loader`,
      options: {
        transpileOnly: isDev,
      },
    },
  ],

  exclude: /node_modules/,
});
