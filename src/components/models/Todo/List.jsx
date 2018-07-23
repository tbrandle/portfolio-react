import React from 'react'
import { Link } from 'react-router-dom'
import { withEither } from '@bowtie/react-utils'
import { Subtitle } from 'atoms'
import { ListItem } from '.'

/** ********** BASE COMPONENT **********/

const TodoList = ({ todoList = [], setTodo }) => {
  return (
    <section className='todo-list-section' >
      {
        todoList.map((todo, i) => {
          const { title, content, favorite } = todo
          return (
            <Link to={`/view/todos/${todo.id}`} key={`todo-item-${i}`}>
              <ListItem key={`todo-${i}`} title={title} content={content} favorite={favorite} handler={() => setTodo(todo)} />
            </Link>
          )
        })
      }
    </section>
  )
}

/** ********** EMPTY STATE **********/

const emptyConditionFn = ({ todoList }) => !todoList.length
const EmptyState = () => <section className='todo-detail-section'><Subtitle title={'You have no todos'} /></section>

export default withEither(emptyConditionFn, EmptyState)(TodoList)
