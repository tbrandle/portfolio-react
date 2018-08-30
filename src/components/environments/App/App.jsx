import React from 'react'
import Drilldown from 'react-router-drilldown'
import { PublicRoute, Body } from 'atoms'
import { Description, Demo, Auth } from 'ecosystems'
import { Header, Footer } from 'organisms'

const App = (props) => {
  return (
    <section className='app'>
      <Header />
      <Body>
        <Drilldown>
          <PublicRoute
            props={props}
            path='/:action(login|logout)/'
            component={Auth}
          />
          <PublicRoute
            props={props}
            path='/home'
            component={Description}
          />
          <PublicRoute
            path='/:action(view|edit|create)/:model(todos)/:modelId?/'
            // path={'/todos/'}
            component={Demo}
          />

        </Drilldown>
      </Body>
      <Footer />
    </section>
  )
}

export default App
