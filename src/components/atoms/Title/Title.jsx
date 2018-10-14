import React from 'react'
import { Icon } from 'atoms'

const Title = ({ children, className }) => {
  return (
    <section className={`flex-row title-wrapper`}>
      {/* <Icon iconName='angle-left'/> */}
      <span className='secondary-color'>{'<'}</span><p className={`page-title primary-text-color ${className || ''}`}>{children}</p>  <span className='secondary-color'> {'/>'} </span>
      {/* <Icon iconName='angle-right'/> */}
    </section>
  )
}

export default Title
