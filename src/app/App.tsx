import { FC, useEffect } from 'react'
import { classNames } from '@/shared/helpers/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { AppRouter } from '@/app/providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

interface AppProps {}

const App: FC<AppProps> = ({}) => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [`${theme}-theme`])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <div className="content-page__main">
                    <AppRouter />
                </div>
            </div>
        </div>
    )
}

export default App
