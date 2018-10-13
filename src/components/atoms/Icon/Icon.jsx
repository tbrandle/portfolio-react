import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGhost,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faAngleDoubleDown,
  faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons'
import {
  Tooltip
} from 'atoms'

library.add(faGhost, faAngleDoubleRight, faAngleDoubleLeft, faAngleDoubleDown, faAngleDoubleUp)

const Icon = ({ className, size = 'xs', fill = true, iconName, color, id, tooltip, ...rest }) => {
  const sizes = {
    xs: '',
    sm: 'lg',
    md: '2x',
    l: '3x',
    xl: '4x',
    xxl: '5x'
  }

  const tooltipId = tooltip ? `Tooltip-${id || Date.now()}-${tooltip.split(' ').join('_')}` : id

  const faClass = className || `fa${fill ? 's' : 'r'} fa-${iconName}`
  return (
    <div className={`fa-icon ${size}`}>
      <FontAwesomeIcon icon={iconName} size={sizes[size]} color={color} />
      {
        tooltip &&
        <Tooltip target={tooltipId} {...rest}>
          {tooltip}
        </Tooltip>
      }
    </div>
  )
}

export default Icon

Icon.propTypes = {
  fill: PropTypes.bool,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  iconName: PropTypes.string,
  className: PropTypes.string
}
