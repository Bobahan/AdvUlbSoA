import { Configuration } from "webpack-dev-server";

export function buildDevServer (port: number): Configuration {
    return {
        historyApiFallback: true,
        port: port,
        open: true,
        hot: true
    }
}