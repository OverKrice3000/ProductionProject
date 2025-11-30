import webpack from "webpack";

export const buildSvgLoader = (): webpack.RuleSetRule => ({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [`@svgr/webpack`],
});
