import { lazy } from 'react'

const LazyAbout = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./AboutPage')), 3000)
        })
)

export default LazyAbout
