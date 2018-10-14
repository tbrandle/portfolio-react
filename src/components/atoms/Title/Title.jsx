import React from 'react'
import { Icon } from 'atoms'

const Title = ({ children }) => {
  return (
    <section className='flex-row'>
      {/* <Icon iconName='angle-left'/> */}
      <span className='secondary-color'>{'<'}</span><p className={`page-title primary-text-color`}>{children}</p>  <span className='secondary-color'> {'/>'} </span>
      {/* <Icon iconName='angle-right'/> */}
    </section>
  )
}

export default Title
