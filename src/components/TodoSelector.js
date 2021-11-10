import React from 'react'

import './TodoSelector.css'

const TodoSelector = ({ mode, onChangeMode }) => {
  const handleButtonClick = (e) => {
    const [action, button] = e.target.id.split('-')

    onChangeMode(action)
  }

  return (
    <div className='TaskSelector'>
      <button
        className={`btn btn--ts ${mode === 'all' ? 'accent' : ''}`}
        id='all-btn'
        onClick={handleButtonClick}
      >
        All
      </button>
      <button
        className={`btn btn--ts ${mode === 'active' ? 'accent' : ''}`}
        id='active-btn'
        onClick={handleButtonClick}
      >
        Active
      </button>
      <button
        className={`btn btn--ts ${mode === 'completed' ? 'accent' : ''}`}
        id='completed-btn'
        onClick={handleButtonClick}
      >
        Completed
      </button>
    </div>
  )
}

export default TodoSelector
