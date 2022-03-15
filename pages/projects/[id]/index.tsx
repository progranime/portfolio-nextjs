import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Badge from 'react-bootstrap/Badge'
import Head from 'next/head'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import listStyles from 'styles/components/_list.module.scss'
import imageStyles from 'styles/components/_image.module.scss'
import galleryStyles from 'styles/components/_gallery.module.scss'
import Separator from 'components/ui/Separator'
import MyImage from 'components/ui/MyImage'
import Card from 'components/ui/Card'
import { projects } from 'shared/mock-api-data/projects'

const MyModal = dynamic(() => import('components/ui/MyModal'))
const ImageGallery = dynamic(() => import('react-image-gallery'))

const initialState = {
    toggleGallery: false,
    galleryStartIndex: 0
}

function ProjectDetails({ project }: any) {
    const [values, setValues] = useState(initialState)

    if (!project) return <p>Loading ...</p>

    function handleToggleGallery() {
        setValues((prevState) => ({
            ...prevState,
            toggleGallery: !prevState.toggleGallery
        }))
    }

    function handleShowGallery(index: number) {
        setValues((prevState) => ({
            ...prevState,
            toggleGallery: true,
            galleryStartIndex: index
        }))
    }

    return (
        <>
            <Head>
                <title>Jeremy Espinosa Portfolio Project - {project.title}</title>
                <meta name='description' content={project.description} />
            </Head>

            <Container className='container--primary'>
                <section className='p-4 pt-10'>
                    <Row>
                        <Col lg={30}>
                            <MyImage>
                                <Image
                                    src={project.galleries[0].original}
                                    layout='fill'
                                    objectFit='cover'
                                    placeholder='blur'
                                    blurDataURL='/images/assets/item-loader.gif'
                                    className={imageStyles.image__item}
                                    alt={project.title}
                                    onClick={() => handleShowGallery(0)}
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
                                            src={gallery.original}
                                            layout='fill'
                                            objectFit='cover'
                                            placeholder='blur'
                                            blurDataURL='/images/assets/item-loader.gif'
                                            className={imageStyles.image__item}
                                            alt={project.title}
                                            onClick={() => handleShowGallery(index)}
                                        />
                                    </MyImage>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>

            {values.toggleGallery && (
                <MyModal show={values.toggleGallery} onHide={handleToggleGallery} size='xl' centered>
                    <div className={galleryStyles.gallery}>
                        <ImageGallery
                            items={project.galleries}
                            thumbnailPosition='bottom'
                            showPlayButton={false}
                            startIndex={values.galleryStartIndex}
                            lazyLoad={true}
                        />
                    </div>
                </MyModal>
            )}
        </>
    )
}

export default ProjectDetails

export function getStaticProps({ params }: any) {
    const project = projects.find((project) => project.id == params.id)

    return {
        props: {
            project
        }
    }
}

export function getStaticPaths() {
    const paths = projects.map((project: any) => ({ params: { id: `${project.id}` } }))

    return {
        paths,
        fallback: true
    }
}
