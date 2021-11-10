import React from 'react'

import Todo from './Todo'

import './TodoList.css'

const TodoList = ({ todos, onChangeTodo }) => {
  return (
    <div className='TodoList'>
      <h2>TodoList</h2>
      {todos.map((t) => (
        <Todo onChange={onChangeTodo} key={t.id} todo={t} />
      ))}
    </div>
  )
}

export default TodoList
