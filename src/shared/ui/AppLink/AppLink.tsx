import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { classNames } from '@/shared/helpers/classNames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps {
    children: React.ReactNode
    to: string
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({ to, children, theme = AppLinkTheme.PRIMARY, className }) => {
  return (
      <NavLink to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])}>{children}</NavLink>
  )
}