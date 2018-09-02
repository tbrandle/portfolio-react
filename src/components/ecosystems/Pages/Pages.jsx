import React from 'react'
import Drilldown from 'react-router-drilldown'
import { PublicRoute, Body } from 'atoms'
import { Header, Footer, Home, About, Skills, Work  } from 'organisms'

const Pages = (props) => {
  return (
      <section>
      <Header />
        <Drilldown>
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

export default Pages
