export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths
    isDev: boolean
    port: number
}

export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    tsConfig: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}