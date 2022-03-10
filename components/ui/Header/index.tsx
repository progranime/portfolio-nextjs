import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import styles from 'styles/components/_header.module.scss'

const initialValues = {
    isToggle: false
}

function Header() {
    const [values, setValues] = useState(initialValues)
    const router = useRouter(),
        pathname = router.pathname

    function handleToggleMenu() {
        setValues((prevState) => ({
            ...prevState,
            isToggle: !prevState.isToggle
        }))
    }

    function handleCloseMenu() {
        setValues((prevState) => ({
            ...prevState,
            isToggle: false
        }))
    }

    return (
        <div
            className={classNames({
                [`${styles.header}`]: true,
                [`${styles['is-active']}`]: values.isToggle
            })}
        >
            <Container className={styles.header__container}>
                <div className={styles.header__logo}>
                    <Link href='/'>
                        <a>
                            <span className={styles.title}>Jeremy Espinosa</span>
                            <span className={styles.subtitle}>React/Next JS Developer</span>
                        </a>
                    </Link>
                </div>
                <div className={styles['header__links-wrapper']}>
                    <ul className={styles.header__links}>
                        <li
                            className={classNames({
                                [`${styles['is-active']}`]: pathname === '/'
                            })}
                            onClick={handleCloseMenu}
                        >
                            <Link href='/'>About Me</Link>
                        </li>
                        <li
                            className={classNames({
                                [`${styles['is-active']}`]: pathname === '/resume'
                            })}
                            onClick={handleCloseMenu}
                        >
                            <Link href='/resume'>Resume</Link>
                        </li>
                        <li
                            className={classNames({
                                [`${styles['is-active']}`]: pathname === '/projects'
                            })}
                            onClick={handleCloseMenu}
                        >
                            <Link href='/projects'>Projects</Link>
                        </li>
                        <li
                            className={classNames({
                                [`${styles['is-active']}`]: pathname === '/code'
                            })}
                            onClick={handleCloseMenu}
                        >
                            <Link href='/code'>Code</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__menu} onClick={handleToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Container>
        </div>
    )
}

export default Header
