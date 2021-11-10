import { useState } from 'react'

import TodoSelector from './components/TodoSelector'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import './App.css'

let nextId = 3

const initialTodos = [
  { id: 0, title: 'Finish the current dev-challenge for the week', completed: false },
  { id: 1, title: 'Complete Adding Interactivity section of the docs', completed: true },
  { id: 2, title: 'Read another chapter from Frontend Unicorn', completed: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [mode, setMode] = useState('all')

  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        completed: false,
      },
    ])
  }

  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo
        } else {
          return t
        }
      })
    )
  }

  const handleChangeMode = (mode) => {
    setMode(mode)
  }

  return (
    <div className='App'>
      <h1 className='title'>#todo</h1>
      <TodoSelector mode={mode} onChangeMode={handleChangeMode} />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} mode={mode} onChangeTodo={handleChangeTodo} />
    </div>
  )
}

export default App
