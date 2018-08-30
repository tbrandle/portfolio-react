import React from 'react'
import { FormGroup as FormGroupRS, FormText } from 'reactstrap'

const RadioFormGroup = ({ label, errors, helper, children, required }) => {
  return (
    <FormGroupRS check className={`${required ? 'required' : 'optional'}`}>
      {helper ? <p className='helpertext'>{helper}</p> : ''}
      <div>
        {label}
      </div>
      <div>
        { children }
      </div>
      <FormText>
        {errors && errors.map((e, i) => <p key={i}>{e}</p>)}
      </FormText>
    </FormGroupRS>
  )
}

export default RadioFormGroup
