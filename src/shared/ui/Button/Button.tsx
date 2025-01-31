import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from '@/shared/helpers/classNames'
import styles from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
}

// отнаследовались от типа ButtonHTMLAttributes -> все доступные свойства и методы также становятся доступным для ButtonProps
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme, onClick, ...rest } = props

    return (
        <button type="button" {...rest} className={classNames(styles.Button, {}, [className, styles[theme]])} onClick={onClick}>
            {children}
        </button>
    )
}
