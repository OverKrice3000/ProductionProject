import path from 'path';
import {BuildEnv, BuildMode, BuildOptions, BuildPaths} from "./config/build/types/config";
import {createWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        build: path.join(__dirname, 'build'),
        html: path.join(__dirname, 'public', 'index.html'),
        src: path.join(__dirname, "src"),
    };

    const mode: BuildMode = env.mode ?? "development";
    const PORT = env.port ?? 3000;

    const isDev = mode === "development";

    const buildOptions: BuildOptions = {
        paths : paths,
        mode: mode,
        isDev: isDev,
        port: PORT,
    }

    return createWebpackConfig(buildOptions);
};
