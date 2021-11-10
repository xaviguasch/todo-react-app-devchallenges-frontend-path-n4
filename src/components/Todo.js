import React from 'react'

import './Todo.css'

const Todo = ({ todo, onChange }) => {
  const { title, completed } = todo

  const checkboxHandler = (e) => {
    onChange({
      ...todo,
      completed: e.target.checked,
    })
  }

  return (
    <div className='Todo'>
      <input
        type='checkbox'
        name=''
        id=''
        checked={completed}
        onChange={checkboxHandler}
      />
      <p>{title}</p>
    </div>
  )
}

export default Todo
