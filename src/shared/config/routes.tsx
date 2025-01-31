import { RouteProps } from 'react-router-dom'
import { AboutPage } from '@/pages/About'
import { MainPage } from '@/pages/Main'
import { NotFoundPage } from '@/pages/NotFoundPage'

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.NOT_FOUND]: '*',
}

export const routeConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

    [Routes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },

    [Routes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
