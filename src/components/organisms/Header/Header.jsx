import React from 'react'
import { Brand } from 'molecules'
import { NavLink, Nav, Row } from 'atoms'
import { auth } from 'lib'


const Header = (props) => {
  return (
    <section className='top-nav-section' >
      <Nav className='nav-bar'>
        <Row>
          <NavLink path={'/home'} title={'Description'} />
          <NavLink path={'/view/doctor_profiles/'} title={'Doctor Profiles'} />
          <NavLink path={'/view/offices/'} title={'Offices'} />
          <NavLink path={'/view/practices/'} title={'Practices'} />
        </Row>
      </Nav>
    </section>
  )
}

export default Header


