import Separator from 'components/ui/Separator'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BiBookOpen } from 'react-icons/bi'
import { MdWork } from 'react-icons/md'
import Head from 'next/head'

import listStyles from 'styles/components/_list.module.scss'
import Timeline from 'components/ui/Timeline'

const educations = [
    {
        id: 1,
        title: 'Technological Institute of the Philippines',
        subtitle: '2012 - 2016',
        description: 'Bachelor of Science in Computer Science'
    },
    {
        id: 2,
        title: 'La Immaculada Concepcion School',
        subtitle: '2006 - 2012'
    }
]

const experiences = [
    {
        id: 1,
        title: 'Music Group',
        subtitle: '2017 - Present',
        description: 'Front End Developer',
        lists: [
            'Responsible for creating, improving and developing websites using best practices in coding.',
            'Provides support to current websites to enhance and clean up code for etter performance',
            'Handles Data which focuses in downloads, software and documents of the website requested by stakeholders',
            'Creates Automation Project to avoid repetitive task of the company',
            'Follows Mobile First Design and Modular coding to have better structure of coding'
        ]
    },
    {
        id: 2,
        title: 'Gee Pacific Services Inc.',
        subtitle: '2016 - 2017',
        description: 'Web Developer',
        lists: [
            'Was responsible for ensuring and maintaining that websites are properly working on a daily basis',
            'Was responsible for creating responsive websites for better usage in mobile devices',
            'Was also responsible for utilizing Chinese CMS software in creating websites'
        ]
    }
]

function Resume() {
    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <Container className='container--primary'>
                <section className='p-4'>
                    <Separator>
                        <h3>Resume</h3>
                    </Separator>

                    <Row>
                        <Col lg={30}>
                            <div className='d-flex align-items-center'>
                                <BiBookOpen size={30} className='me-2' />
                                <h4>Education</h4>
                            </div>

                            <Timeline className='mt-4' items={educations} />
                        </Col>
                        <Col lg={30}>
                            <div className='d-flex align-items-center'>
                                <MdWork size={30} className='me-2' />
                                <h4>Experience</h4>
                            </div>

                            <Timeline className='mt-4' items={experiences} />
                        </Col>
                    </Row>
                </section>

                <section className='bg-light-gray p-4'>
                    <Row>
                        <Col lg={30}>
                            <Separator>
                                <h3>Coding Skills</h3>
                            </Separator>

                            <ul className={`${listStyles.list} ${listStyles['list--styled']}`}>
                                <li>HTML/HTML5</li>
                                <li>CSS/CSS3 (LESS,SCSS), Mobile First Design, BEM naming convention</li>
                                <li>Bootstrap 3/4/5</li>
                                <li>Javascript (Modular Pattern Design), jQuery, AJAX</li>
                                <li>ReactJS, Redux</li>
                                <li>Handlebar Template</li>
                                <li>Nodejs</li>
                                <li>PHP, MySQL</li>
                                <li>MVC Framework CodeIgniter</li>
                            </ul>
                        </Col>
                        <Col lg={30}>
                            <Separator>
                                <h3>Tools</h3>
                            </Separator>

                            <ul className={`${listStyles.list} ${listStyles['list--styled']}`}>
                                <li>Tortoise SVN, Git</li>
                                <li>JS Task Runner (Gulp, Grunt)</li>
                                <li>NPM, NVM</li>
                                <li>JIRA, Wrike</li>
                                <li>FileZilla</li>
                                <li>Visual Studio Code, Sublime Text</li>
                                <li>HeidiSQL, SQLYog</li>
                            </ul>
                        </Col>
                    </Row>
                </section>

                <section className='p-4'>
                    <Separator>
                        <h3>Certifications and Awards</h3>
                    </Separator>

                    <ul className={`${listStyles.list} ${listStyles['list--styled']}`}>
                        <li>Certificate of Recognition for being on the Dean’s List for First Semester, School Year 2013-2014</li>
                        <li>Certificate of Recognition for being on the Dean’s List for First Semester, School Year 2015-2016</li>
                        <li>Certificate of Recognition for being on the VPAA’s List for Second Semester, School Year 2015- 2016</li>
                        <li>
                            Certificate of Recognition for winning 3rd place in the Science and Technology Fair 2016 during TIP’s 54th Foundation
                            Anniversary
                        </li>
                    </ul>
                </section>
            </Container>
        </>
    )
}

export default Resume
