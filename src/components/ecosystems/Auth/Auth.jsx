import React from 'react'
import { PublicRoute } from 'atoms'
import { LoginForm } from 'organisms'

const Auth = (props) => {
  const { handleLogout, handleLoginSubmit } = props
  console.log('rendering Auth')
  return (
    <div className='demo-template'>
      <PublicRoute
        props={{ handleLoginSubmit }}
        path={'/login'}
        component={LoginForm}
      />
      <PublicRoute
        path={'/logout'}
        action={handleLogout}
      />
    </div>
  )
}

export default Auth
