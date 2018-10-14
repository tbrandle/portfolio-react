import React from 'react'
import { Body, Title } from 'atoms'
import { Navigation } from 'organisms'

const Contact = ({ page }) => {
  console.log('rendering Contact')
  return (
    <Body className='contact-section'>
      <Navigation page={page} />

      <section className='hero-section'>
        <Title>contact</Title>
      </section>
    </Body>
  )
}

export default Contact
