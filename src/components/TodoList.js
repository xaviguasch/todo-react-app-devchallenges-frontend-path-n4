import React from 'react'

import Todo from './Todo'

import './TodoList.css'

const TodoList = ({ todos, mode, onChangeTodo }) => {
  let todosToRender

  if (mode === 'all') {
    todosToRender = todos
  } else if (mode === 'active') {
    todosToRender = todos.filter((todo) => !todo.completed)
  } else if (mode === 'completed') {
    todosToRender = todos.filter((todo) => todo.completed)
  }

  return (
    <div className='TodoList'>
      <h2>TodoList</h2>
      {todosToRender.map((ttr) => (
        <Todo key={ttr.id} todo={ttr} onChange={onChangeTodo} />
      ))}
    </div>
  )
}

export default TodoList
