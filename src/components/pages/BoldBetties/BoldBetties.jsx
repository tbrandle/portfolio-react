import React from 'react'
// import boldbettiesLogo from 'images/logos/bold-betties-logo.png'
import {
  Body,
  Row,
  Col
} from 'atoms'
import {
  boldBettiesScreenshot,
  boldBettiesMobile,
  boldBettiesTablet
} from 'images/project-previews'

const BoldBetties = ({ page }) => {
  return (
    <Body className='work-section'>
      {/* <section className='hero-section'> */}

      <Row>
        <Col sm='12' className='flex flex-center project-single-title'>BoldBetties</Col>
        <Col sm='6' className={'flex flex-center'}>
          <div className='project-single-description'>
            Lorem idivsum dolor sit amet consectetur, adipisicing elit. Voluptatem rerum ipsum, at accusantium consequatur eaque deserunt iure sequi qui doloribus dolores! Vitae, pariatur sunt. Non temporibus numquam quis perferendis impedit?
          </div>
        </Col>
        <Col sm='6'>
          <div className='parent-perspective'>
            <img src={boldBettiesScreenshot} className='transform-left img-size-monitor' />
            <img src={boldBettiesTablet} className='transform-left img-size-tablet' />
            <img src={boldBettiesMobile} className='transform-left img-size-mobile' />
          </div>
        </Col>
      </Row>
      {/* </section> */}
    </Body>
  )
}

export default BoldBetties
