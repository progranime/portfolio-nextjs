import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { BsLinkedin, BsEnvelope, BsFillGeoAltFill, BsDownload, BsFillCalendarMonthFill } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'
import { GrLanguage } from 'react-icons/gr'
import Image from 'next/image'

import styles from 'styles/components/_sidebar.module.scss'
import buttonStyles from 'styles/components/_button.module.scss'
import imageStyles from 'styles/components/_image.module.scss'
import listStyles from 'styles/components/_list.module.scss'
import MyImage from 'components/ui/MyImage'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__container}>
                <div className={styles.sidebar__intro}>
                    <Link href='/'>
                        <a>
                            <MyImage style={{ width: '120px' }} className={imageStyles['image--border']}>
                                <Image
                                    src='/images/home-dp.jpg'
                                    alt='My Profile Image'
                                    layout='fill'
                                    objectFit='cover'
                                    placeholder='blur'
                                    blurDataURL='/images/assets/item-loader.gif'
                                    className={imageStyles.image__item}
                                />
                            </MyImage>
                        </a>
                    </Link>
                    <p className={`${styles.title}`}>Jeremy Espinosa</p>
                    <Badge bg='dark' className={styles.badge}>
                        React/Next JS Developer
                    </Badge>
                    <ul className={`${listStyles.list} ${styles.connections}`}>
                        <li>
                            <Link href='https://www.linkedin.com/in/jeremy-espinosa-213236119/'>
                                <a target='_blank'>
                                    <BsLinkedin size='20' />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebar__details}>
                    <ul className={listStyles.list}>
                        <li>
                            <BsFillCalendarMonthFill />
                            <span>August 10, 1995</span>
                        </li>
                        <li>
                            <BsFillGeoAltFill />
                            <span>Pasig City, Philippines</span>
                        </li>
                        <li>
                            <BsEnvelope />
                            <span>jeremyespinosa1995@gmail.com</span>
                        </li>
                        <li>
                            <GrLanguage />
                            <span>Filipino, English</span>
                        </li>
                    </ul>

                    <div className='text-center'>
                        <Button className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                            <Link href='/docs/resume.pdf'>
                                <a download>
                                    <BsDownload className='me-2' />
                                    <span>Download Resume</span>
                                </a>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
