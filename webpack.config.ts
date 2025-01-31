import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildOptions } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    // достаем env переменные которые были прокинуты в package.json
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000

    const options: BuildOptions = {
        mode: mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            tsConfig: path.resolve(__dirname, '', 'tsconfig.json'),
        },
        isDev: isDev,
        port: PORT
    }

    const config: webpack.Configuration = buildWebpackConfig(options, isDev)

    return config
};