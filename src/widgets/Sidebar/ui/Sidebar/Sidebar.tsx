import { classNames } from '@/shared/helpers/classNames'
import { FC, useState } from 'react'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleToggle = () => setIsCollapsed((prev) => !prev)

    return (
        <div data-testid="sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: isCollapsed }, [])}>
            <button onClick={handleToggle}>toggle</button>
            <div className={styles.switcher}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
