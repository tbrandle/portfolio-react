import React from 'react'
import { PublicRoute, Switch } from 'atoms'
import {
  BoldBetties,
  BriteBee,
  Asird,
  Houndstooth,
  Homebot
} from 'pages'

const ProjectSingle = (props) => {
  return (
    <section>
      <Switch>
        <PublicRoute
          props={props}
          path='/work/BoldBetties'
          component={BoldBetties}
        />
        <PublicRoute
          props={props}
          path='/work/BriteBee'
          component={BriteBee}
        />
        <PublicRoute
          props={props}
          path='/work/Asird'
          component={Asird}
        />
        <PublicRoute
          props={props}
          path='/work/Houndstooth'
          component={Houndstooth}
        />
        <PublicRoute
          props={props}
          path='/work/Homebot'
          component={Homebot}
        />
      </Switch>
    </section>
  )
}

export default ProjectSingle
