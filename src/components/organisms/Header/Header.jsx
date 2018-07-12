import React from 'react'
import { Brand } from '../../molecules'
import { NavLink } from '../../atoms'
import Auth from '../../../lib/jToker'

const Header = (props) => {
  console.log(Auth.user.signedIn)
  return (
    <section className='top-nav-section' >
      <Brand title={'Welcome to Bowtie\'s React-Recompose Starter Kit'} />
      <div className='nav-bar'>
        <NavLink path={'/home'} title={'Description'} />
        {Auth.user.signedIn ? <NavLink path={'/logout'} title={'logout'} /> : <NavLink path={'/login'} title={'Login'} />}
        <NavLink path={'/view/todos/'} title={'Demo - todo app'} />
      </div>
    </section>
  )
}

export default Header
