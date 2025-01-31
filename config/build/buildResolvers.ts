import { ResolveOptions } from 'webpack'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

export function buildResolvers(tsConfig: string): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        plugins: [new TsconfigPathsPlugin({ configFile: tsConfig })],
        mainFiles: ['index'],
    }
}
