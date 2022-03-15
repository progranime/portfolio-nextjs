import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Head from 'next/head'

import Card from 'components/ui/Card'
import Separator from 'components/ui/Separator'
import { projects } from 'shared/mock-api-data/projects'

function Projects({ projects }: any) {
    return (
        <>
            <Head>
                <title>Jeremy Espinosa Portfolio - Projects</title>
            </Head>
            <Container className='container--primary'>
                <section className='p-4'>
                    <Separator>
                        <h3>Projects</h3>
                    </Separator>

                    <Row className='gx-4'>
                        {projects.map((project: any) => (
                            <Col sm={30} className='mb-2' key={project.id}>
                                <Card
                                    image={project.galleries[0].original}
                                    title={project.title}
                                    description={project.description}
                                    link={{
                                        href: `/projects/${project.id}`
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

export default Projects

export async function getStaticProps() {
    return {
        props: {
            projects
        }
    }
}
