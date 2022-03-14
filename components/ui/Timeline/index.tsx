import classNames from 'classnames'

import styles from 'styles/components/_timeline.module.scss'
import listStyles from 'styles/components/_list.module.scss'
import { TimelineProps } from 'shared/types/timeline.types'

function Timeline({ items, className }: TimelineProps) {
    return (
        <div
            className={classNames({
                [`${styles.timeline}`]: true,
                [`${className}`]: className
            })}
        >
            <div className={styles.timeline__container}>
                {items.map((item: any) => (
                    <article className={styles.timeline__item} key={item.id}>
                        <h5 className={styles.title}>{item.title}</h5>
                        <span className={styles.period}>{item.subtitle}</span>
                        <p className={styles.description}>{item.description}</p>

                        {item.lists && (
                            <ul className={`${listStyles.list} ${listStyles['list--styled']}`}>
                                {item.lists.map((list: string, index: number) => (
                                    <li key={index}>{list}</li>
                                ))}
                            </ul>
                        )}
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Timeline
