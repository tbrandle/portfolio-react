import React from 'react'
import Drilldown from 'react-router-drilldown'
import { Redirect } from 'react-router-dom'

import { PublicRoute, Switch } from 'atoms'
import { PagesController } from 'ecosystems'
import { Header, Footer } from 'organisms'

const App = (props) => {
  return (
    <section className='app'>
      <Drilldown>
        <Switch>
          <PublicRoute
            props={props}
            path='/:page(skills|about|work|home)'
            component={PagesController}
          />
          <Redirect to={'/home'} />
        </Switch>
      </Drilldown>
      <Footer />
    </section>
  )
}

export default App
