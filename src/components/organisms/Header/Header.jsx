import React from 'react'
import { Brand } from 'molecules'
import { NavLink, Nav, Row } from 'atoms'

const Header = ({ match: { params } }) => {
  return (
    <section className='top-nav-section' >
      <Nav className='nav-bar'>
        <Row>
          <NavLink path={'/home'} title={'Home'} active={params['page'] === 'home'} />
          <NavLink path={'/about'} title={'About'} active={params['page'] === 'about'} />
          <NavLink path={'/contact'} title={'Contact'} active={params['page'] === 'contact'} />
          <NavLink path={'/work'} title={'Work'} active={params['page'] === 'work'} />
        </Row>
      </Nav>
    </section>
  )
}

export default Header
