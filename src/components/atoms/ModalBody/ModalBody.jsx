import React from 'react'
import { ModalBody as ModalBodyRS } from 'reactstrap'

const ModalBody = ({ children, ...rest }) => {
  return (
    <ModalBodyRS {...rest}>
      { children }
    </ModalBodyRS>
  )
}

export default ModalBody
