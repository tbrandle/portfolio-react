import React from 'react'
import { Link as LinkRR } from 'react-router-dom'

const Link = ({ to, children }) => {
  return (
    <LinkRR className='link' to={to || ''}>
      { children }
    </LinkRR>
  )
}

export default Link
