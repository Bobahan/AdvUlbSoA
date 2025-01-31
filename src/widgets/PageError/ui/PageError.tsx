import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { FC } from 'react'
import styles from './PageError.module.scss'

interface PageErrorProps {}

export const PageError: FC<PageErrorProps> = ({}) => {
    const handleReload = () => location.reload()

    return (
        <div className={styles.PageError}>
            <h1>PageError</h1>
            <Button theme={ButtonTheme.OUTLINED} onClick={handleReload}>
                Обновить страницу
            </Button>
        </div>
    )
}
