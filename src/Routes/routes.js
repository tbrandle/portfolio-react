import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'environments'
import { Switch, PublicRoute } from 'atoms'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path='/'
          component={AppContainer}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
