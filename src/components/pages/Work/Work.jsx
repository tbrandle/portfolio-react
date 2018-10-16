import React from 'react'
import { bear, tent } from 'images'
import {
  boldBettiesLogo,
  houndstoothLogo,
  britebeeLogo,
  homebotLogo,
  asirdLogo
} from 'images/logos'
import {
  asirdScreenshot,
  boldBettiesScreenshot,
  britebeeScreenshot,
  britebeeScreenshot2,
  homebotScreenshot,
  houndstoothScreenshot
} from 'images/project-previews'
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
      <section class='first-section flex-column flex-center'>

        <ProjectPreview
          dir='right'
          project={{
            projectName: 'Bold Betties',
            description: 'Find your adventure',
            screenshot: boldBettiesScreenshot,
            logo: boldBettiesLogo
          }}
        />

        <ProjectPreview
          dir='left'
          project={{
            projectName: 'Houndstooth',
            description: 'Real time jekyll editor',
            screenshot: houndstoothScreenshot,
            logo: houndstoothLogo
          }}
        />

        <ProjectPreview
          dir='right'
          project={{
            projectName: 'BriteBee',
            description: 'Find your adventure',
            screenshot: britebeeScreenshot,
            logo: britebeeLogo
          }}
        />

        <ProjectPreview
          dir='left'
          project={{
            projectName: 'Homebot',
            description: 'Find your adventure',
            screenshot: homebotScreenshot,
            logo: homebotLogo
          }}
        />

        <ProjectPreview
          dir='right'
          project={{
            projectName: 'ASIRD',
            description: 'Find your adventure',
            screenshot: asirdScreenshot,
            logo: asirdLogo
          }}
        />
      </section>
    </Body>
  )
}

export default Work
