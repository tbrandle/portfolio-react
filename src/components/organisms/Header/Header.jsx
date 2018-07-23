import React from 'react'
import { Brand } from 'molecules'
import { NavLink } from 'atoms'
import { auth } from 'lib'

const Header = (props) => {
  console.log(auth.signedIn())
  return (
    <section className='top-nav-section' >
      <Brand title={'Welcome to Bowtie\'s React-Recompose Starter Kit'} />
      <div className='nav-bar'>
        <NavLink path={'/home'} title={'Description'} />
        {
          auth.signedIn()
            ? <NavLink path={'/logout'} title={'logout'} />
            : <NavLink path={'/login'} title={'Login'} />
        }
        <NavLink path={'/view/todos/'} title={'Demo - todo app'} />
      </div>
    </section>
  )
}

export default Header
