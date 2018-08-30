import React from 'react'
import Drilldown from 'react-router-drilldown'
import { PublicRoute, Body } from 'atoms'
import { Home, About, Skills, Work } from 'ecosystems'
import { Header, Footer } from 'organisms'

const App = (props) => {
  return (
    <section className='app'>
      <Header />
      {/* <Body> */}
      <Drilldown>
        <PublicRoute
          props={props}
          path='/:page(home)'
          component={Home}
        />
        <PublicRoute
          props={props}
          path='/:page(about)'
          component={About}
        />
        <PublicRoute
          props={props}
          path='/:page(skills)'
          component={Skills}
        />
        <PublicRoute
          props={props}
          path='/:page(work)'
          component={Work}
        />
      </Drilldown>
      {/* </Body> */}
      <Footer />
    </section>
  )
}

export default App
