import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import dynamic from 'next/dynamic'

import styles from 'styles/components/_main-layout.module.scss'
import { MainLayoutProps } from 'shared/types/main-layout.types'

const Sidebar = dynamic(() => import('components/ui/Sidebar'))
const Header = dynamic(() => import('components/ui/Header'))
const Footer = dynamic(() => import('components/ui/Footer'))

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className={styles['main-layout']}>
            <Container className='position-relative'>
                <Row>
                    <Col xs={60} lg={12} className='mb-4 mb-lg-0'>
                        <Sidebar />
                    </Col>
                    <Col xs={60} lg={48} className='pe-0'>
                        <Header />
                        {children}
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainLayout
