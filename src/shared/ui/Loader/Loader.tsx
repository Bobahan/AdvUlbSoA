import { FC } from 'react'
import styles from './Loader.module.scss'

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
    return (
        <div className={styles.Loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader
