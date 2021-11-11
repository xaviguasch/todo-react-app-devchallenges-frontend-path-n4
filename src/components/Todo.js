import React from 'react'

import './Todo.css'

const Todo = ({ todo, mode, onChange, onDelete }) => {
  const { title, completed } = todo

  const checkboxHandler = (e) => {
    onChange({
      ...todo,
      completed: e.target.checked,
    })
  }

  const deleteBtnHandler = (e) => {
    onDelete(todo.id)
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
      {mode === 'completed' && (
        <button className='btn' onClick={deleteBtnHandler}>
          <span className='material-icons-round'>delete_outline</span>{' '}
        </button>
      )}
    </div>
  )
}

export default Todo
