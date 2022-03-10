import { CardProps } from 'shared/types/card.types'
import classNames from 'classnames'

import styles from 'styles/components/_card.module.scss'

function Card({ children, header, footer, className }: CardProps) {
    return (
        <div
            className={classNames({
                [`${styles.card}`]: true,
                [`${className}`]: className
            })}
        >
            <div className={styles.card__container}>
                {header && <div className={styles.card__header}>{header}</div>}
                <div className={styles.card__body}>{children}</div>
                {footer && <div className={styles.card__footer}>{footer}</div>}
            </div>
        </div>
    )
}

export default Card
