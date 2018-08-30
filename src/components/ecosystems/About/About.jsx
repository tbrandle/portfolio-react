import React from 'react'
import Particles from 'react-particles-js'
import deer from './deer.svg'
import { Body, Row, Col } from 'atoms'

const About = (props) => {
  return (
    <Body className='about-section'>
      <Row>
        <Col>
          About
        </Col>
      </Row>
      {/* <Particles
        params={{
          particles: {
            shape: {
              type: 'images',
              images: [
                { src: deer, height: 20, width: 20 },
                // { src: 'path/to/second/image.jpg', height: 20, width: 20 },
              ]
            }
          }
        }} /> */}
    </Body>
  )
}

export default About
