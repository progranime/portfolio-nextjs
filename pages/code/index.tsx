import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Head from 'next/head'

import Card from 'components/ui/Card'
import Separator from 'components/ui/Separator'
import { codes } from 'shared/mock-api-data/codes'

function Code({ codes }: any) {
    return (
        <>
            <Head>
                <title>Jeremy Espinosa Portfolio - Code</title>
            </Head>
            <Container className='container--primary'>
                <section className='p-4'>
                    <Separator>
                        <h3>Code</h3>
                    </Separator>

                    <Row className='gx-4'>
                        {codes.map((code: any) => (
                            <Col lg={30} className='mb-2' key={code.id}>
                                <Card
                                    image={code.image}
                                    title={code.title}
                                    description={code.description}
                                    link={{
                                        href: code.link,
                                        target: '_blank'
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default Code

export async function getStaticProps() {
    return {
        props: {
            codes
        }
    }
}
