import React from 'react'
import laptop from 'images/laptop.png'
import {
  Body,
  Icon,
  Title,
  Row,
  Col
} from 'atoms'
import { NavArrows } from 'molecules'

const Home = () => {
  return (
    <Body className='home-section'>
      <section className={`hero-section home`}>
        <Row className='homescreen-row'>
          <Col sm='12' className='flex-column flex-center'>
            <img src={laptop} className='homescreen-image' />
          </Col>
          <Col sm='12' className='flex-column flex-center'>
            <Title>software<span className='secondary-color'>.</span>developer</Title>
          </Col>
        </Row>
        <NavArrows />
      </section>
    </Body>
  )
}

export default Home
