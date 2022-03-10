import classNames from 'classnames'

import styles from 'styles/components/_loader.module.scss'
import { LoaderProps } from 'shared/types/loader.types'

function Loader({ isActive }: LoaderProps) {
    return <div className={classNames({ [`${styles.loader}`]: true, [`${styles['is-active']}`]: isActive })} />
}

export default Loader
