import React from 'react'
import { CSSTransition } from 'react-transition-group'
import TrackVisibility from 'react-on-screen'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Body, Icon } from 'atoms'
import { NavArrows } from 'molecules'

const Home = ({ show, toggleShow, page }) => {
  return (
    <Body className='home-section'>
      <section key={Date.now()} className={`hero-section home`}>
        <p className={`home-p-tag`}>Home.</p>
        <Icon iconName='angle-double-right' />

        {/* <NavArrows dir='right' /> */}
      </section>
    </Body>

  )
}

export default Home

// <Body className='home-section'>
//   {/* <TrackVisibility partialVisibility offset={-700}> */}
//     {/* <CSSTransition
//         in={show}
//         timeout={300}
//         classNames="page"
//         onEnter={() => console.log("onEnter")}
//         onEntering={() => console.log("onEntering")}
//         onEntered={() => console.log('onEntered')}
//         onExit={() => console.log("onExit")}
//         onExiting={() => console.log("onExiting")}
//         unmountOnExit
//       > */}
//     {
//       ({ isVisible }) => {
//         return (
//           <section key={Date.now()} className={`hero-section home`}>
//             <p className={`home-p-tag ${isVisible ? 'fade-in' : `fade-out`}`}>
//                 Home.
//             </p>
//             <Icon icon="coffee" />
//             {/* <NavArrows dir='right' /> */}
//           </section>

//         )
//       }
//     }
//   {/* </TrackVisibility> */}
//   {/* </CSSTransition> */}
// </Body>
