import React from 'react'
import bear from 'images/bear.png'
import tent from 'images/tent.png'
import { PublicRoute, Switch, Body, Title } from 'atoms'
import { Navigation } from 'organisms'

const Work = ({ page }) => {
  console.log('rendering Work')
  return (
    <Body className='work-section'>
      <section className='hero-section'>
        <Navigation page={page} />
        <Title>work</Title>
        <img src={bear} alt='dinosaur' className='bear' />
        <img src={tent} alt='storm trooper' className='tent' />
      </section>
    </Body>
  )
}

export default Work
