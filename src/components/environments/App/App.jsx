import React from 'react'
import Drilldown from 'react-router-drilldown'
import { PublicRoute, Body } from 'atoms'
import { Home, About, Skills, Work } from 'ecosystems'
import { Header, Footer } from 'organisms'

const App = (props) => {
  return (
    <section className='app'>
      <Header />
      <Body>
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
      </Body>
      <Footer />
    </section>
  )
}

export default App
