import React from 'react'
import Drilldown from 'react-router-drilldown'
import { Redirect } from 'react-router-dom'

import { PublicRoute, Switch } from 'atoms'
import { PagesController, ProjectSingle } from 'ecosystems'
import { Header, Footer } from 'organisms'

const App = (props) => {
  return (
    <section className='app'>
      <Drilldown>
        <Switch>
          <PublicRoute
            props={props}
            exact
            path='/:page(work)/:projectName(BoldBetties|BriteBee|Asird|Houndstooth|Homebot)'
            component={ProjectSingle}
          />
          <PublicRoute
            props={props}
            path='/:page(contact|about|work|home)'
            component={PagesController}
          />
          <Redirect to={'/home'} />
        </Switch>
      </Drilldown>
    </section>
  )
}

export default App
