import { CardProps } from 'shared/types/card.types'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { ImLink } from 'react-icons/im'

import styles from 'styles/components/_card.module.scss'
import imageStyles from 'styles/components/_image.module.scss'
import MyImage from 'components/ui/MyImage'

function Card({ image, title, subtitle, description, link, className, icon, children }: CardProps) {
    return (
        <div
            className={classNames({
                [`${styles.card}`]: true,
                [`${className}`]: className
            })}
        >
            <div className={styles.card__container}>
                {children ? (
                    children
                ) : (
                    <>
                        <div className={styles.card__image}>
                            {image ? (
                                <>
                                    {link && (
                                        <>
                                            <Link href={link.href}>
                                                <a target={link.target}>
                                                    <MyImage>
                                                        <Image
                                                            src={image}
                                                            layout='fill'
                                                            objectFit='cover'
                                                            placeholder='blur'
                                                            blurDataURL='/images/assets/item-loader.gif'
                                                            className={imageStyles.image__item}
                                                            alt={title}
                                                        />
                                                    </MyImage>
                                                </a>
                                            </Link>

                                            <Link href={link.href}>
                                                <a className={styles.link} target={link.target}>
                                                    <ImLink size={20} />
                                                </a>
                                            </Link>
                                        </>
                                    )}
                                </>
                            ) : (
                                icon
                            )}
                        </div>
                        <div className={styles.card__details}>
                            <p className={styles.title}>{title}</p>
                            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                            {description && <p className={styles.description}>{description}</p>}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Card
