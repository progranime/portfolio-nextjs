import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Badge from 'react-bootstrap/Badge'
import axios from 'axios'
import Head from 'next/head'

import listStyles from 'styles/components/_list.module.scss'
import imageStyles from 'styles/components/_image.module.scss'
import Separator from 'components/ui/Separator'
import MyImage from 'components/ui/MyImage'
import Card from 'components/ui/Card'

function ProjectDetails({ project }: any) {
    return (
        <>
            <Head>
                <title>Project - {project.title}</title>
                <meta name='description' content={project.description} />
            </Head>

            <Container className='container--primary'>
                <section className='p-4 pt-10'>
                    <Row>
                        <Col lg={30}>
                            <MyImage>
                                <Image
                                    src={project.galleries[0].src}
                                    layout='fill'
                                    objectFit='cover'
                                    placeholder='blur'
                                    blurDataURL='/images/assets/item-loader.gif'
                                    className={imageStyles.image__item}
                                />
                            </MyImage>
                        </Col>
                        <Col lg={30} className='mt-2 mt-sm-0'>
                            <Separator>
                                <h3>{project.title}</h3>
                            </Separator>

                            <p>{project.position}</p>
                            <p>{project.description}</p>

                            <ul className={`${listStyles.list} ${listStyles['list--styled']}`}>
                                {project.features.map((feature: string[], index: number) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            <p className='mt-2 mb-0'>
                                <b>Technologies Used:</b>
                            </p>

                            <ul className={`${listStyles.list} ${listStyles['list--inline']}`}>
                                {project.technologies.map((technology: string[], index: number) => (
                                    <li key={index}>
                                        <Badge bg='secondary'>{technology}</Badge>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>

                    <Row className='mt-2'>
                        {project.galleries.map((gallery: any, index: number) => (
                            <Col sm={30} lg={20} key={index} className='mb-2'>
                                <Card>
                                    <MyImage>
                                        <Image
                                            src={gallery.src}
                                            layout='fill'
                                            objectFit='cover'
                                            placeholder='blur'
                                            blurDataURL='/images/assets/item-loader.gif'
                                            className={imageStyles.image__item}
                                        />
                                    </MyImage>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default ProjectDetails

export async function getServerSideProps({ params }: any) {
    const response = await axios({
            url: `/api/project?id=${params.id}`
        }),
        { data } = response

    return {
        props: {
            project: data.project
        }
    }
}
