import React from 'react'
import Drilldown from 'react-router-drilldown'
import { PublicRoute, Body } from 'atoms'
import { Pages } from 'ecosystems'
import { Header, Footer } from 'organisms'

const App = (props) => {
  return (
    <section className='app'>
      <Drilldown>
        <PublicRoute
          props={props}
          path='/:page(skills|about|work|home)'
          component={Pages}
        />
      </Drilldown>
      <Footer />
    </section>
  )
}

export default App
