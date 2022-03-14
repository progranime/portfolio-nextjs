import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import Head from 'next/head'

import Card from 'components/ui/Card'
import Separator from 'components/ui/Separator'

function Projects({ projects }: any) {
    return (
        <>
            <Head>
                <title>Projects</title>
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
                                    image={project.galleries[0]}
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

export async function getServerSideProps() {
    const response = await axios({
            url: '/api/projects'
        }),
        { projects } = response.data

    return {
        props: {
            projects
        }
    }
}
