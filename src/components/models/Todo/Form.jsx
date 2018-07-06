import React from 'react'
import { Form } from '../../organisms'
import { FieldContainer } from '../../molecules'
import { Title } from '../../atoms'

/** ********** BASE COMPONENT **********/

const TodoForm = ({ todo, formSubmit, modelName }) => {
  return (
    <section>
      <Title title={`Your ${modelName}`} />
      <Form model={todo} onSubmit={formSubmit}>
        <FieldContainer
          type={'text'}
          label={'Todo'}
          placeholder={'todo title here'}
          name={'title'}
        />
        <FieldContainer
          type={'text'}
          label={'Description'}
          placeholder={'description here'}
          name={'content'}
        />
        <FieldContainer
          type={'select'}
          label={'Importance'}
          options={['not very important', 'important', 'REALLY important']}
          name={'importance'}
        />
      </Form>
    </section>
  )
}

export default TodoForm
