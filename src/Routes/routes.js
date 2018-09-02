import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'environments'
import { Switch, PublicRoute } from 'atoms'

const Routes = () => {
  return (
    <section>
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path='/'
          component={AppContainer}
        />
      </Switch>
    </BrowserRouter>
    </section>
  )
}

export default Routes
