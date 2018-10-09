import React from 'react'
import Drilldown from 'react-router-drilldown'
import { PublicRoute, Body } from 'atoms'
import { Home, About, Skills, Work } from 'pages'
import { Header, Footer } from 'organisms'

const PagesController = (props) => {
  return (
    <section>
      <Header />
      <Drilldown
        transitionDuration={800}
        animateHeight
        transitionTimingFunction={'ease-in-out'}
      >
        <PublicRoute
          props={props}
          path='/home'
          component={Home}
        />
        <PublicRoute
          props={props}
          path='/about'
          component={About}
        />
        <PublicRoute
          props={props}
          path='/skills'
          component={Skills}
        />
        <PublicRoute
          props={props}
          path='/work'
          component={Work}
        />
      </Drilldown>
    </section>
  )
}

export default PagesController
