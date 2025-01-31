import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

export function buildWebpackConfig (options: BuildOptions, isDev: boolean): Configuration  {
    return {
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        mode: options.mode,
        plugins: buildPlugins(options.paths.html, options.isDev),
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolvers(options.paths.tsConfig),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options.port) : undefined
    }
}