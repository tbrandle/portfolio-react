import React from 'react'
import { Icon } from '..'

const Table = ({ children, title, sort, ...rest }) => {
  return (
    <th {...rest}>
      { title || children }
      { sort && <Icon iconName='sort' /> }
    </th>
  )
}

export default Table
