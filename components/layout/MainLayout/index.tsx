import styles from 'styles/components/_main-layout.module.scss'
import Footer from 'components/ui/Footer'
import Header from 'components/ui/Header'
import { MainLayoutProps } from 'shared/types/main-layout.types'

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className={styles['main-layout']}>
            <div className={styles['main-layout__side']}></div>

            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
