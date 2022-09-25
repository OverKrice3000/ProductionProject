import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(buildOptions: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = buildOptions;

    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const sassLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                  modules: {
                      auto: (path: string) => path.includes(".module."),
                      localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
                  }
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        sassLoader,
    ];
}