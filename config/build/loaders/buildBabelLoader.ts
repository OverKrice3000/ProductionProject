import webpack from "webpack";

export const buildBabelLoader = (): webpack.RuleSetRule => ({
  test: /\.([tj])sx?$/,
  exclude: /node_modules/,
  use: {
    loader: `babel-loader`,
    options: {
      presets: [`@babel/preset-env`],
    },
  },
});
