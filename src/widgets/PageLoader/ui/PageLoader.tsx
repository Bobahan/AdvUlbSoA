import { FC } from 'react'
import styles from './PageLoader.module.scss'
import { classNames } from '@/shared/helpers/classNames'
import Loader from '@/shared/ui/Loader/Loader'

interface PageLoaderProps {}

export const PageLoader: FC<PageLoaderProps> = ({}) => {
    return (
        <div className={classNames(styles.PageLoader, {}, [])}>
            <Loader />
        </div>
    )
}
