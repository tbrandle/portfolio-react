import React from 'react'
import dino from 'images/dino.png'
import stormTroopers from 'images/storm_troopers.png'

import {
  Body,
  Row,
  Col,
  Title
} from 'atoms'
import { Navigation } from 'organisms'

const About = ({ page }) => {
  return (
    <Body className='about-section'>
      <section className='hero-section'>
        <Navigation page={page} />

        <Title>about</Title>
        <img src={dino} alt='dinosaur' className='dino' />
        <img src={stormTroopers} alt='storm trooper' className='trooper' />
      </section>
      <section class='first-section'>
        <Row>
          <Col sm='6'>[IMAGE HERE]</Col>
          <Col sm='6'>
            <p>
            Hello world, my name is Tim Brandle!
            </p>
            <p>
            I am a Software Developer based out of Denver, CO. I specialize in Frontend Development, with some experience in Backend. As a developer, my goal is to create applications that are organized, modular, scalable, and well tested. The ability to create anything that comes to mind is fascinating to me and has instilled a drive for continuous learning of new technologies, frameworks, and design principles.
            </p>
            <p>
            Simply put, I like to make things and make them well. Outside of work I enjoy rock climbing, mountain biking, road biking, camping, drinking coffee, brewing beer, and traveling.
            </p>
          </Col>
        </Row>

      </section>
    </Body>
  )
}

export default About
