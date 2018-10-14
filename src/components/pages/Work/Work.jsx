import React from 'react'
import bear from 'images/bear.png'
import tent from 'images/tent.png'
import boldbetties from 'images/project-previews/bold-betties.png'
import boldbettieslogo from 'images/logos/bold-betties-logo.png'
import {
  Body,
  Title
} from 'atoms'
import { Navigation } from 'organisms'
import { ProjectPreview } from 'molecules'

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
      <section class='first-section'>

        <ProjectPreview
          dir='right'
          project={{
            projectName: 'Bold Betties',
            description: 'Find your adventure',
            screenshot: boldbetties,
            logo: boldbettieslogo
          }}
        />

        <ProjectPreview
          dir='left'
          project={{
            projectName: 'Bold Betties',
            description: 'Find your adventure',
            screenshot: boldbetties,
            logo: boldbettieslogo
          }}
        />

        <ProjectPreview
          dir='right'
          project={{
            projectName: 'Bold Betties',
            description: 'Find your adventure',
            screenshot: boldbetties,
            logo: boldbettieslogo
          }}
        />
      </section>
    </Body>
  )
}

export default Work
