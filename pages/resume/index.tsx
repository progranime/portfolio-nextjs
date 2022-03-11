import Separator from 'components/ui/Separator'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BiBookOpen } from 'react-icons/bi'
import { MdWork } from 'react-icons/md'

function Resume() {
    return (
        <Container className='container--primary'>
            <section className='p-4'>
                <Separator>
                    <h3>Resume</h3>
                </Separator>

                <Row>
                    <Col lg={30}>
                        <div className='d-flex'>
                            <BiBookOpen size={30} className='me-2' />
                            <h4>Education</h4>
                        </div>
                    </Col>
                    <Col lg={30}>
                        <div className='d-flex'>
                            <MdWork size={30} className='me-2' />
                            <h4>Experience</h4>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Resume
