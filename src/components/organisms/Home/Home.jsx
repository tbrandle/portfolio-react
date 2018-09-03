import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { PublicRoute, Switch, Body } from 'atoms'

const Home = (props) => {
  return (
    <ReactCSSTransitionGroup
      transitionName='example'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <Body key={Date.now()} className='home-section'>
        <section className='hero-section'>
          Home.
        </section>
      </Body>
    </ReactCSSTransitionGroup>
  )
}

export default Home
