import React from 'react'
import { withRouter } from 'react-dom'
import { navRight } from 'images'
import {
  Icon
} from 'atoms'

const NavArrow = ({ handleClick, className }) => {
  return (
    <div onClick={handleClick} className={className} >
      <img src={navRight} onClick={handleClick} className='nav-arrow' />
    </div>
  )
}

export default NavArrow
