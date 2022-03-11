import { CardProps } from 'shared/types/card.types'
import classNames from 'classnames'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'

import styles from 'styles/components/_card.module.scss'
import buttonStyles from 'styles/components/_button.module.scss'
import imageStyles from 'styles/components/_image.module.scss'
import MyImage from '../MyImage'

function Card({ image, title, subtitle, description, link, className, icon }: CardProps) {
    return (
        <div
            className={classNames({
                [`${styles.card}`]: true,
                [`${className}`]: className
            })}
        >
            <div className={styles.card__container}>
                <div className={styles.card__image}>
                    {image ? (
                        <MyImage style={{ width: '150px' }}>
                            <Image src={image} layout='fill' objectFit='cover' className={imageStyles.image__item} alt={title} />
                        </MyImage>
                    ) : (
                        icon
                    )}
                </div>
                <div className={styles.card__details}>
                    <p className={styles.title}>{title}</p>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    {description && <p className={styles.description}>{description}</p>}
                    {link && (
                        <Button variant='primary' className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                            <Link href={link.href}>
                                <a target={link.target}>{link.title}</a>
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
