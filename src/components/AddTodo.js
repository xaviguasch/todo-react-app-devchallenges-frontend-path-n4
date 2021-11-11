import { useState } from 'react'

import './AddTodo.css'

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('')

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  const handleButtonClick = () => {
    onAddTodo(title)
    setTitle('')
  }

  return (
    <div className='AddTodo'>
      <input
        className='input-text'
        placeholder='add details'
        type='text'
        value={title}
        onChange={handleInputChange}
      />
      <button className='btn btn--add-todo' onClick={handleButtonClick}>
        Add
      </button>
    </div>
  )
}

export default AddTodo
