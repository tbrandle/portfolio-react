import React from 'react'
import { Brand } from 'molecules'
import { NavLink, Nav, Row } from 'atoms'

const Header = (props) => {
  const { location } = props
  return (
    <section className='top-nav-section' >
      <Nav className='nav-bar'>
        <Row>
          <NavLink path={'/home'} title={'Home'} active={location['pathname'] === '/home'} />
          <NavLink path={'/about'} title={'About'} active={location['pathname'] === '/about'} />
          <NavLink path={'/skills'} title={'Skills'} active={location['pathname'] === '/skills'} />
          <NavLink path={'/work'} title={'Work'} active={location['pathname'] === '/work'} />
        </Row>
      </Nav>
    </section>
  )
}

export default Header
