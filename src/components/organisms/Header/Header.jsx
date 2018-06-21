import React from 'react'
import { Brand } from '../../molecules'
import { NavLink } from '../../atoms'

const Header = (props) => {
  return (
    <section className='top-nav-section' >
      <Brand title={'Welcome to Bowtie\'s React-Recompose Starter Kit'} />
      <div className='nav-bar'>
        <NavLink path={'/home'} title={'Description'} />
        <NavLink path={'/view/todos/'} title={'Demo - todo app'} />
      </div>
    </section>
  )
}

export default Header
