import React from 'react'
import { Form } from 'organisms'
import { FieldContainer } from 'molecules'
import { Title } from 'atoms'

const Login = ({ formSubmit, login }) => {
  console.log('rendering Demo')
  return (
    <section>
      <Title title={'Login'} />
      <Form onSubmit={formSubmit}>
        <FieldContainer
          type={'text'}
          label={'Email'}
          placeholder={'user@example.com'}
          name={'email'}
        />
        <FieldContainer
          type={'password'}
          label={'Password'}
          placeholder={'Password'}
          name={'password'}
        />
      </Form>
    </section>
  )
}

export default Login
