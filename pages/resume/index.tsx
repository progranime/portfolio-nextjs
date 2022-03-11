import Separator from 'components/ui/Separator'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BiBookOpen } from 'react-icons/bi'
import { MdWork } from 'react-icons/md'

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
                <Separator>
                    <h3>Skills</h3>
                </Separator>
            </section>
        </Container>
    )
}

export default Resume
