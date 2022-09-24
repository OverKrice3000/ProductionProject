import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(buildOptions: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: [".js", ".ts", ".tsx"]
    };
}