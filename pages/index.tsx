import type { NextPage } from 'next'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { BiCodeBlock } from 'react-icons/bi'

import buttonStyles from 'styles/components/_button.module.scss'
import Card from 'components/ui/Card'
import Separator from 'components/ui/Separator'

const Home: NextPage = () => {
    return (
        <>
            <Container className='container--primary'>
                <section className='p-4'>
                    <Separator>
                        <h3>About Me</h3>
                    </Separator>
                    <p>
                        I'm Jeremy Espinosa. I'm a simple, creative, enthusiastic and fun-loving person. I always like to create something on my own
                        which is helpful for others.
                    </p>

                    <p>
                        I'm experienced Web Developer seeking opportunity to bring knowledge of programming. A self-motivated IT professional with
                        huge knowledge and proficiency in HTML, CSS, JavaScript, JQuery, Reactjs, Nodejs, PHP and mobile responsive web development,
                        as well as strong skills and ability in writing clean and efficient code.
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
                            />
                        </Col>
                    </Row>
                </section>

                <section className='p-4'>
                    <Separator>
                        <h3>My Projects</h3>
                    </Separator>

                    <Row className='gx-4'>
                        <Col lg={30} className='mb-2'>
                            <Card
                                image='/images/projects/fmt/1.png'
                                title='Free Music Tribe'
                                subtitle='Front End Developer'
                                description="This website offers every user to have freedom to buy and sell music equipment. This is where you can find Pre-Loved of New Gear and it's All for Free. We are continuing to build more features that will be helpful to our user."
                                link={{
                                    href: '/',
                                    title: 'Learn More'
                                }}
                            />
                        </Col>
                        <Col lg={30} className='mb-2'>
                            <Card
                                image='/images/projects/fmt/1.png'
                                title='Free Music Tribe'
                                subtitle='Front End Developer'
                                description="This website offers every user to have freedom to buy and sell music equipment. This is where you can find Pre-Loved of New Gear and it's All for Free. We are continuing to build more features that will be helpful to our user."
                                link={{
                                    href: '/',
                                    title: 'Learn More'
                                }}
                            />
                        </Col>
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
                        <Col lg={30} className='mb-2'>
                            <Card
                                image='/images/projects/code/slider.jpg'
                                title='Card and Banner Slider'
                                description='A card and banner slider using jquery'
                                link={{
                                    href: 'https://jsfiddle.net/progranime/xd86Lt7o/',
                                    title: 'Learn More',
                                    target: '_blank'
                                }}
                            />
                        </Col>
                        <Col lg={30} className='mb-2'>
                            <Card
                                image='/images/projects/code/banner.jpg'
                                title='Banner'
                                description='Banner with breadcrumbs and list of links'
                                link={{
                                    href: 'https://jsfiddle.net/progranime/617ce3uv/',
                                    title: 'Learn More',
                                    target: '_blank'
                                }}
                            />
                        </Col>
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
