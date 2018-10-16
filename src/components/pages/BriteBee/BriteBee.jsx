import React from 'react'
import {
  britebeeScreenshot2,
  britebeeTablet
} from 'images/project-previews'
// import boldbettiesLogo from 'images/logos/bold-betties-logo.png'
import {
  Body,
  Row,
  Col
} from 'atoms'

const BriteBee = ({ page }) => {
  console.log('rendering BriteBee')
  return (
    <Body className='work-section'>
      {/* <section className='hero-section'> */}

      <Row>
        <Col sm='12' className='flex flex-center project-single-title'>BriteBee</Col>
        <Col sm='6' className={'flex flex-center'}>
          <div className='project-single-description'>
            Lorem idivsum dolor sit amet consectetur, adipisicing elit. Voluptatem rerum ipsum, at accusantium consequatur eaque deserunt iure sequi qui doloribus dolores! Vitae, pariatur sunt. Non temporibus numquam quis perferendis impedit?
          </div>
        </Col>
        <Col sm='6'>
          <div className='parent-perspective'>
            <img src={britebeeScreenshot2} className='transform-left img-size-monitor' />
            <img src={britebeeTablet} className='transform-left img-size-tablet' />
            {/* <img src={boldBettiesMobile} className='transform-left img-size-mobile' /> */}
          </div>
        </Col>
      </Row>
      {/* </section> */}
    </Body>
  )
}

export default BriteBee
