import classNames from 'classnames'

import styles from 'styles/components/_image.module.scss'
import { MyImageProps } from 'shared/types/my-image.types'

function MyImage({ children, className, onClick, ...rest }: MyImageProps) {
    return (
        <div
            className={classNames({
                [`${styles.image}`]: true,
                [`${className}`]: className
            })}
            onClick={onClick}
            {...rest}
        >
            {children}
        </div>
    )
}

export default MyImage
