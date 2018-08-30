import React from 'react'

const Subtitle = ({ title, children }) => {
  return (
    <h3 className='subtitle'>{ title || children }</h3>
  )
}

export default Subtitle
