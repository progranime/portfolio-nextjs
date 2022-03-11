import Container from 'react-bootstrap/Container'

import styles from 'styles/components/_footer.module.scss'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <Container className={styles.footer__container}>
                <div className={styles.footer__copyright}>
                    <span>&copy; {year} All Rights Reserved.</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
