import React from 'react'
import { Table as TableRS } from 'reactstrap'

const Table = ({ children, ...rest }) => {
  return (
    <TableRS {...rest}>
      { children }
    </TableRS>
  )
}

export default Table
