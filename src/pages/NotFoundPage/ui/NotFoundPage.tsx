import { FC } from 'react'
import { classNames } from '@/shared/helpers/classNames'
import styles from './NotFoundPage.module.scss'

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
    return <div className={classNames(styles.NotFoundPage, {}, [])}> 404 - NotFoundPage</div>
}
