import Container from 'react-bootstrap/Container'
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

import styles from 'styles/components/_footer.module.scss'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <Container className={styles.footer__container}>
                <div className={styles.footer__copyright}>
                    <span>&copy; {year} by Jeremy Espinosa</span>
                    <span>
                        Proudly created with{' '}
                        <Link href='https://nextjs.org/'>
                            <a target='_blank'>Next JS</a>
                        </Link>
                    </span>
                </div>
                <ul className={styles.footer__list}>
                    <li>
                        <b>Email</b>
                        <span>jeremyespinosa1995@gmail.com</span>
                    </li>
                    <li>
                        <b>Follow</b>
                        <BsLinkedin />
                    </li>
                </ul>
            </Container>
        </footer>
    )
}

export default Footer
