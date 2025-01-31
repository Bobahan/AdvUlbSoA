import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '@/shared/config/routes'
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader'

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = ({}) => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    )
}
