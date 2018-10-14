import React from 'react'
import laptop from 'images/laptop.png'
import {
  Body,
  Icon,
  Title,
  Row,
  Col
} from 'atoms'
import { Navigation } from 'organisms'

const Home = ({ page }) => {
  return (
    <Body className='home-section'>
      <section className={`hero-section home`}>
        <Navigation page={page} />
        <Row className='homescreen-row'>
          <Col sm='12' className='flex-column flex-center'>
            <img src={laptop} className='homescreen-image' />
          </Col>
          <Col sm='12' className='flex-column flex-center'>
            <Title className='software-developer'>software<span className='secondary-color'>.</span>developer</Title>
          </Col>
        </Row>
      </section>
    </Body>
  )
}

export default Home
