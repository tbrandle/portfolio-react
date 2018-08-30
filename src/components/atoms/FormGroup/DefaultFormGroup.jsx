import React from 'react'
import { FormGroup as FormGroupRS, Label, FormText } from 'reactstrap'
import { Icon } from 'atoms'

const DefaulFormGroup = ({ id, check, label, errors, helper, children, required, labelIconName }) => {
  return (
    <FormGroupRS check={check} className={`${required ? 'required' : 'optional'}`}>
      {helper ? <p className='helpertext'>{helper}</p> : ''}
      <Label check={check} for={id}>
        <div>{labelIconName && <Icon iconName={labelIconName} />} {label}</div>

        <div>{children}</div>
      </Label>
      <FormText>
        {errors && errors.map((e, i) => <p key={i}>{e}</p>)}
      </FormText>
    </FormGroupRS>
  )
}

export default DefaulFormGroup
