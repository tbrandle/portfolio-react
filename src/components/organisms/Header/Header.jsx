import React from 'react'
import { Brand } from 'molecules'
import { NavLink, Nav, Row } from 'atoms'


const Header = (props) => {
  return (
    <section className='top-nav-section' >
      <Nav className='nav-bar'>
        <Row>
          <NavLink path={'/home'} title={'Home'} />
          <NavLink path={'/about'} title={'About'} />
          <NavLink path={'/skills'} title={'Skills'} />
          <NavLink path={'/work'} title={'Work'} />
        </Row>
      </Nav>
    </section>
  )
}

export default Header


