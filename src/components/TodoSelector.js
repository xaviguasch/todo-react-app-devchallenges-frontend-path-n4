import React from 'react'

import './TodoSelector.css'

const TodoSelector = () => {
  return (
    <div className='TaskSelector'>
      <button className='btn btn--ts'>All</button>
      <button className='btn btn--ts'>Active</button>
      <button className='btn btn--ts'>Completed</button>
    </div>
  )
}

export default TodoSelector
