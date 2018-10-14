import React from 'react'
import { Icon } from 'atoms'

const Title = ({ children, className }) => {
  return (
    <section className={`flex-row title-wrapper ${className || ''}`}>
      {/* <Icon iconName='angle-left'/> */}
      <span className='secondary-color closing-tags'>{'<'}</span><p className={`page-title primary-text-color`}>{children}</p>  <span className='secondary-color closing-tags'> {'/>'} </span>
      {/* <Icon iconName='angle-right'/> */}
    </section>
  )
}

export default Title
