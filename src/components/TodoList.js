import React from 'react'

import Todo from './Todo'

import './TodoList.css'

const TodoList = ({ todos, mode, onChangeTodo, onDeleteTodo, onDeleteCompleted }) => {
  let todosToRender

  if (mode === 'all') {
    todosToRender = todos
  } else if (mode === 'active') {
    todosToRender = todos.filter((todo) => !todo.completed)
  } else if (mode === 'completed') {
    todosToRender = todos.filter((todo) => todo.completed)
  }

  const deleteCompletedHandler = () => {
    onDeleteCompleted()
  }

  return (
    <div className='TodoList'>
      {todosToRender.map((ttr) => (
        <Todo
          key={ttr.id}
          todo={ttr}
          onChange={onChangeTodo}
          onDelete={onDeleteTodo}
          mode={mode}
        />
      ))}

      {mode === 'completed' && (
        <button onClick={deleteCompletedHandler}>Delete All</button>
      )}
    </div>
  )
}

export default TodoList
