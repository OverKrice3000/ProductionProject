import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins (buildOptions: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = buildOptions;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name]-[contenthash:8].css`,
      chunkFilename: `css/[name]-[contenthash:8].css`,
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
