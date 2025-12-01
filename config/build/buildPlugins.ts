import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions, BuildType } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins (buildOptions: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDev, buildType } = buildOptions;

  const productionPlugins = [
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
  ];

  const devPlugins = [
    new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: buildType === BuildType.SERVE ? `server` : `static`,
      reportFilename: `bundleAnalysisReport.html`,
    }),
  ];

  return productionPlugins.concat(isDev ? devPlugins : []);
}
