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
      <div className='todo-group'>
        <input
          type='checkbox'
          name=''
          id=''
          checked={completed}
          onChange={checkboxHandler}
        />
        <p className={`todo-item ${completed ? 'strike-through' : ''}`}>{title}</p>
      </div>
      {mode === 'completed' && (
        <button className='btn btn--ts btn--trash' onClick={deleteBtnHandler}>
          <span className='material-icons-round'>delete_outline</span>{' '}
        </button>
      )}
    </div>
  )
}

export default Todo
