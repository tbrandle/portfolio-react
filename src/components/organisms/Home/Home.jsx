import React from 'react'
import { CSSTransition } from 'react-transition-group';
import TrackVisibility from 'react-on-screen';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { PublicRoute, Switch, Body } from 'atoms'

const Home = ({ show, toggleShow, page }) => {
  return (
    <Body  className='home-section'>        
            <TrackVisibility partialVisibility offset={-700}>
      {/* <CSSTransition
            in={show}
            timeout={300}
            classNames="page"
            onEnter={() => console.log("onEnter")}
            onEntering={() => console.log("onEntering")}
            onEntered={() => console.log('onEntered')}
            onExit={() => console.log("onExit")}
            onExiting={() => console.log("onExiting")}
            unmountOnExit
          > */}
          {
            ({ isVisible }) => {
              return (
                <section key={Date.now()} className={`hero-section home`}>
                  <p  className={`home-p-tag ${isVisible ? 'fade-in' : `fade-out`}`}>
                    Home.
                  </p>
                </section>
                
              )
            }
          }
          </TrackVisibility>
        {/* </CSSTransition> */}
        </Body>

  )
}

export default Home