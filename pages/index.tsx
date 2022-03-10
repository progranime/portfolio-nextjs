import type { NextPage } from 'next'
import Image from 'next/image'
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import buttonStyles from 'styles/components/_button.module.scss'
import cardStyles from 'styles/components/_card.module.scss'
import imageStyles from 'styles/components/_image.module.scss'
import listStyles from 'styles/components/_list.module.scss'
import Card from 'components/ui/Card'
import classNames from 'classnames'
import MyImage from 'components/ui/MyImage'

const Home: NextPage = () => {
    function cardFooter() {
        const component = (
            <ul
                className={classNames({
                    [`${listStyles.list}`]: true,
                    'text-center': true
                })}
            >
                <li>
                    <Link href='https://www.linkedin.com/in/jeremy-espinosa-213236119/'>
                        <a target='_blank' className='text-dark'>
                            <BsLinkedin />
                        </a>
                    </Link>
                </li>
            </ul>
        )

        return component
    }

    return (
        <>
            <Container>
                <Row className='justify-content-center center-content-sm gx-0 gx-sm-2'>
                    <Col xs={60} sm={20} md={15} lg={12} xl={10}>
                        <Card footer={cardFooter()} className={cardStyles['card--primary']}>
                            <div className='text-center'>
                                {/* <MyImage style={{ maxWidth: '150px' }}>
                                    <Image
                                        src='/images/home-dp.jpg'
                                        layout='fill'
                                        className={classNames({
                                            'rounded-circle': true,
                                            [`${imageStyles.image__item}`]: true
                                        })}
                                    />
                                </MyImage> */}
                                <img src='/images/home-dp.jpg' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                            </div>

                            <div className='text-center mt-3'>
                                <p style={{ fontSize: '22px', fontWeight: 'bold' }}>Jeremy Espinosa</p>

                                <hr className='my-4' />
                                <p style={{ letterSpacing: '0.25em', fontSize: '14px' }} className='d-none d-sm-block'>
                                    React/Next JS Developer
                                </p>

                                <div className='d-block d-sm-none mt-2'>
                                    <Button variant='primary' className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                                        <Link href='/resume'>Resume</Link>
                                    </Button>
                                    <Button variant='outline-dark' className={`${buttonStyles.btn} ${buttonStyles['btn-outline-dark']} ms-2`}>
                                        <Link href='/projects'>Projects</Link>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={60} sm={20} md={15} lg={12} xl={10} className='mt-6 mt-sm-0'>
                        <h1>Hello</h1>
                        <p>Here's who I am and what I do</p>
                        <div className='d-none d-sm-block'>
                            <Button variant='primary' className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                                <Link href='/resume'>Resume</Link>
                            </Button>
                            <Button variant='outline-dark' className={`${buttonStyles.btn} ${buttonStyles['btn-outline-dark']} ms-2`}>
                                <Link href='/projects'>Projects</Link>
                            </Button>
                        </div>

                        <p className='mt-2 mt-sm-6' style={{ fontSize: '12px' }}>
                            I'm a simple, creative, enthusiastic and fun-loving person. I always like to create something on my own which is helpful
                            for others.
                        </p>
                        <p className='mt-2' style={{ fontSize: '12px' }}>
                            I'm experienced Web Developer seeking opportunity to bring knowledge of programming. A self-motivated IT professional with
                            huge knowledge and proficiency in HTML, CSS, JavaScript, JQuery, Reactjs, PHP and mobile responsive web development, as
                            well as strong skills and ability in writing clean and efficient code.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
