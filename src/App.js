import { useState } from 'react'

import TodoSelector from './components/TodoSelector'
import AddTodo from './components/AddTodo'

import './App.css'

let nextId = 3

const initialTodos = [
  { id: 0, title: 'Finish the current dev-challenge for the week', completed: false },
  { id: 1, title: 'Complete Adding Interactivity section of the docs', completed: true },
  { id: 2, title: 'Read another chapter from Frontend Unicorn', completed: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ])
  }

  return (
    <div className='App'>
      <h1 className='title'>#todo</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoSelector />
    </div>
  )
}

export default App
