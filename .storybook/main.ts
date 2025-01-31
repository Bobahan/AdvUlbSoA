import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
const path = require('path')

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    // У Storybook есть свой собственно настроенный Webpack
    // и он из коробки не понимает абсолютные импорты
    // помогаем ему с этим, переопределяя resolver
    webpackFinal: async (config) => {
        // @ts-ignore
        config.resolve.plugins = [
            // @ts-ignore
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                // @ts-ignore
                extensions: config.resolve.extensions,
            }),
        ]

        // Переопределяем обработчик для svg loader
        // @ts-ignore
        const imageRule = config.module.rules.find((rule) => {
            // @ts-ignore
            if (typeof rule !== 'string' && rule.test instanceof RegExp) {
                // @ts-ignore
                return rule.test.test('.svg')
            }
        })

        if (typeof imageRule !== 'string') {
            // @ts-ignore
            imageRule.exclude = /\.svg$/
        }

        config.module?.rules?.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        // @ts-ignore
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        })

        return config
    },

    // Чтобы не было ошибок с React is not defined
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
}
export default config
