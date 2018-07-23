import React from 'react'
import { PublicRoute } from '../../atoms'
import Login from './LoginContainer'
import Logout from './Logout'

const Auth = (props) => {
  console.log('rendering Demo')
  return (
    <div className='demo-template'>
      <PublicRoute
        props={props}
        path={'/login'}
        component={Login}
      />
      <PublicRoute
        props={props}
        path={'/logout'}
        component={Logout}
      />
    </div>
  )
}

export default Auth
