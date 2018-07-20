import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer, AuthContainer } from 'environments'
import { Switch, PublicRoute } from 'atoms'

const featureList = [
  'react router',
  'recompose',
  'scss loaders',
  'Bowtie React utilities',
  'Bowtie Api helper',
  'Bowtie React file structure',
  'jest-enzyme library'
]

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path='/(callback|redirect|login|logout)'
          component={AuthContainer}
        />
        <PublicRoute
          props={{ featureList }}
          path='/'
          component={AppContainer}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
