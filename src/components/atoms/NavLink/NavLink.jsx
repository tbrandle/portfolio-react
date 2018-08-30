import React from 'react'
import { NavLink as NavLinkRS, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const NavLink = ({ path, title, children, active }) => {
  console.log('active', active)
  return (
    <NavItem active={active}>
      <NavLinkRS tag={Link} to={path}>
        { title || children}
      </NavLinkRS>
    </NavItem>
  )
}

export default NavLink
