import React from 'react'
import { withRouter } from 'react-dom'
import {
  Icon
} from 'atoms'

const NavArrows = ({ dir = 'right', handleClick }) => {
  return (
    <div onClick={handleClick}>
      <Icon iconName={`caret`} />
      {/* <Icon className={`fas fa-angle-double-${dir}`} /> */}
    </div>
  )
}

export default NavArrows
