import React from 'react'
import { PublicRoute } from 'atoms'
import { LoginForm } from 'organisms'

const Auth = (props) => {
  const { handleLogout } = props
  console.log('rendering Auth')
  return (
    <div className='demo-template'>
      <PublicRoute
        props={props}
        path={'/login'}
        component={LoginForm}
      />
      <PublicRoute
        props={props}
        path={'/logout'}
        component={() => handleLogout()}
      />
    </div>
  )
}

export default Auth
