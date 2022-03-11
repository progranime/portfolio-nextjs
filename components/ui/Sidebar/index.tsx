import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { BsLinkedin, BsEnvelope, BsFillGeoAltFill, BsDownload, BsFillCalendarMonthFill } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'

import styles from 'styles/components/_sidebar.module.scss'
import buttonStyles from 'styles/components/_button.module.scss'
import listStyles from 'styles/components/_list.module.scss'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__container}>
                <div className={styles.sidebar__intro}>
                    <img src='/images/home-dp.jpg' alt='' className={styles.dp} />
                    <p className={styles.title}>
                        Jeremy <b>Espinosa</b>
                    </p>
                    <Badge bg='dark' className={styles.badge}>
                        React/Next JS Developer
                    </Badge>
                    <ul className={`${listStyles.list} ${styles.connections}`}>
                        <li>
                            <Link href='https://www.linkedin.com/in/jeremy-espinosa-213236119/'>
                                <a target='_blank'>
                                    <BsLinkedin />
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
                    </ul>

                    <div className='text-center'>
                        <Button className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                            <Link href='/'>
                                <a>
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
