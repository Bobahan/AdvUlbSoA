import { FC } from 'react'
import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/helpers/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, onChangeTheme } = useTheme()

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={onChangeTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
