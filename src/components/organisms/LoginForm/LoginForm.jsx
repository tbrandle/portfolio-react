import React from 'react'
import { Form } from 'organisms'
import { FieldContainer } from 'molecules'
import { Title } from 'atoms'

const LoginForm = ({ handleLoginSubmit, login }) => {
  console.log('rendering Demo')
  return (
    <section>
      <Title title={'Login'} />
      <Form onSubmit={handleLoginSubmit}>
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

export default LoginForm
