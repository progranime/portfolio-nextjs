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
        title: 'Technological Institute of the Philippines (BSCS)',
        subtitle: '2012 - 2016',
        description: 'Certifications and Awards',
        lists: [
            "Certificate of Recognition for being on the Dean's List for First Semester, School Year 2013-2014",
            "Certificate of Recognition for being on the Dean's List for First Semester, School Year 2015-2016",
            "Certificate of Recognition for being on the VPAA's List for Second Semester, School Year 2015- 2016",
            "Certificate of Recognition for winning 3rd place in the Science and Technology Fair 2016 during TIP's 54th Foundation Anniversary"
        ]
    },
    {
        id: 2,
        title: 'La Immaculada Concepcion School',
        subtitle: '2008 - 2012'
    },
    {
        id: 3,
        title: 'Arellano University',
        subtitle: '2002 - 2008'
    }
]

const experiences = [
    {
        id: 1,
        title: 'Music Tribe',
        subtitle: '2017 - Present',
        description: 'Front End Developer',
        lists: [
            'Responsible for creating, improving, and developing websites using the best practices in coding.',
            'Provides support to current websites to enhance and clean up code for better performance.',
            'Creates automation project to avoid repetitive task of the company.',
            'Follows mobile first design and modular coding to have better code structure.',
            'Lead the front-end developer and set coding standards to follow.'
        ]
    },
    {
        id: 2,
        title: 'Gee Pacific Services Inc.',
        subtitle: '2016 - 2017',
        description: 'Web Developer',
        lists: [
            'Responsible for ensuring and maintaining the websites.',
            'Responsible for creating responsive websites for better usage in mobile devices.',
            'Responsible for utilizing Chinese CMS software in creating websites'
        ]
    }
]

function Resume() {
    return (
        <>
            <Head>
                <title>Jeremy Espinosa Portfolio - Resume</title>
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
                                <li>CSS (LESS/SCSS), BEM, CSS Module, Mobile First Design</li>
                                <li>Bootstrap 3/4/5</li>
                                <li>JavaScript (Object Notation Design Pattern)</li>
                                <li>jQuery, AJAX, Handlebar Template</li>
                                <li>Reactjs, Nextjs, Redux, React Bootstrap, Nodejs</li>
                                <li>PHP, MySQL</li>
                                <li>CodeIgniter MVC Framework</li>
                            </ul>
                        </Col>
                        <Col lg={30}>
                            <Separator>
                                <h3>Tools</h3>
                            </Separator>

                            <ul className={`${listStyles.list} ${listStyles['list--styled']}`}>
                                <li>Tortoise SVN, Git, Source Tree</li>
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
            </Container>
        </>
    )
}

export default Resume
