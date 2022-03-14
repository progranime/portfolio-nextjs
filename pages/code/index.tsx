import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'components/ui/Card'
import Separator from 'components/ui/Separator'

const codes = [
    {
        id: 1,
        title: 'Card and Banner Slider',
        image: '/images/projects/code/slider.jpg',
        description: 'A card and banner slider using jquery',
        link: {
            href: 'https://jsfiddle.net/progranime/xd86Lt7o/',
            target: '_blank'
        }
    },
    {
        id: 2,
        title: 'Banner',
        image: '/images/projects/code/banner.jpg',
        description: 'Banner with breadcrumbs and list of links',
        link: {
            href: 'https://jsfiddle.net/progranime/xd86Lt7o/',
            target: '_blank'
        }
    },
    {
        id: 3,
        title: 'Custom List',
        image: '/images/projects/code/custom-list.jpg',
        description: 'Custom list with many modifier to change the style of it, following the BEM naming convention',
        link: {
            href: 'https://jsfiddle.net/progranime/8L7yx5bj/',
            target: '_blank'
        }
    },
    {
        id: 4,
        title: 'Dropdown',
        image: '/images/projects/code/dropdown.jpg',
        description: 'Custom dropdown using Jquery and CSS3',
        link: {
            href: 'https://jsfiddle.net/progranime/op5Lb20f/',
            target: '_blank'
        }
    },
    {
        id: 5,
        title: 'Custom Tab',
        image: '/images/projects/code/tab.jpg',
        description: 'Custom tab using Jquery and CSS3',
        link: {
            href: 'https://jsfiddle.net/progranime/spjucwh0/',
            target: '_blank'
        }
    },
    {
        id: 6,
        title: 'Custom Radio and Checkbox',
        image: '/images/projects/code/custom-radio-checkbox.jpg',
        description: 'Custom Radio and Checkbox using pure CSS3',
        link: {
            href: 'https://jsfiddle.net/progranime/uqyn4t8f/',
            target: '_blank'
        }
    }
]

function Code() {
    return (
        <Container className='container--primary'>
            <section className='p-4'>
                <Separator>
                    <h3>Code</h3>
                </Separator>

                <Row className='gx-4'>
                    {codes.map((code) => (
                        <Col lg={30} className='mb-2' key={code.id}>
                            <Card
                                image={code.image}
                                title={code.title}
                                description={code.description}
                                link={{
                                    href: code.link.href,
                                    target: code.link.target
                                }}
                            />
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    )
}

export default Code
