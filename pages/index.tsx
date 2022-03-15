import type { NextPage } from 'next'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { BiCodeBlock } from 'react-icons/bi'
import Head from 'next/head'

import buttonStyles from 'styles/components/_button.module.scss'
import cardStyles from 'styles/components/_card.module.scss'
import Card from 'components/ui/Card'
import Separator from 'components/ui/Separator'
import axios from 'axios'

const Home: NextPage = ({ projects, codes }: any) => {
    return (
        <>
            <Head>
                <title>Jeremy Espinosa Portfolio - About Me</title>
            </Head>
            <Container className='container--primary'>
                <section className='p-4'>
                    <Separator>
                        <h3>About Me</h3>
                    </Separator>

                    <p>
                        I&apos;m a Web Developer with over 6+ years of experience looking for an opportunity to apply my programming skills. A
                        self-motivated IT expert with extensive experience and understanding in HTML, CSS, JavaScript, jQuery, Reactjs, Nextjs,
                        Nodejs, PHP, and mobile responsive web development, as well as excellent skills and abilities in developing clean and
                        efficient code.
                    </p>
                </section>

                <section className='bg-light-gray p-4'>
                    <Separator>
                        <h3>My Expertise</h3>
                    </Separator>

                    <Row className='gx-4'>
                        <Col lg={30} className='mb-2'>
                            <Card
                                icon={<BiCodeBlock size={30} />}
                                title='Web Development'
                                description='High-quality and professional development of sites at the professional level.'
                                className={cardStyles['card--grid']}
                            />
                        </Col>
                    </Row>
                </section>

                <section className='p-4'>
                    <Separator>
                        <h3>My Projects</h3>
                    </Separator>

                    <Row className='gx-4'>
                        {projects.map((project: any) => (
                            <Col lg={30} className='mb-2' key={project.id}>
                                <Card
                                    image={project.galleries[0].original}
                                    title={project.title}
                                    subtitle={project.position}
                                    description={project.description}
                                    link={{
                                        href: `/projects/${project.id}`
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>

                    <div className='text-center my-2'>
                        <Button variant='primary' className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                            <Link href='/projects'>See More</Link>
                        </Button>
                    </div>
                </section>

                <section className='bg-light-gray p-4'>
                    <Separator>
                        <h3>My Sample Code</h3>
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

                    <div className='text-center my-2'>
                        <Button variant='primary' className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                            <Link href='/code'>See More</Link>
                        </Button>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Home

export async function getStaticProps() {
    const response = await axios({
            url: '/api/projects'
        }),
        responseCodes = await axios({
            url: '/api/codes'
        }),
        { projects } = response.data,
        { codes } = responseCodes.data,
        filteredProjects = projects.filter((data: any) => data.id < 3),
        filteredCodes = codes.filter((data: any) => data.id < 3)

    return {
        props: {
            projects: filteredProjects,
            codes: filteredCodes
        }
    }
}
