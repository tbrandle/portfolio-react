import React from 'react'
import { withRouter } from 'react-dom'
import navRight from 'images/double-right-arrows-angles.svg'
import {
  Icon
} from 'atoms'

const NavArrows = ({ dir = 'right', handleClick, children }) => {
  return (
    <div onClick={handleClick}>
      <img src={navRight} />
    </div>
  )
}

export default NavArrows
