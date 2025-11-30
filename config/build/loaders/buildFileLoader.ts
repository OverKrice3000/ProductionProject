import webpack from "webpack";

export const buildFileLoader = (): webpack.RuleSetRule => ({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: `file-loader`,
    },
  ],
});
