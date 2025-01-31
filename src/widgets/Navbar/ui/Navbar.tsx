import { FC } from 'react'
import { classNames } from '@/shared/helpers/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = ''}) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={styles.mainLink}>About</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
            </div>
        </div>
    )
}