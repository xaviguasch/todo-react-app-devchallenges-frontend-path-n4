import { useState } from 'react'

import TodoSelector from './components/TodoSelector'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import './App.css'

let nextId = 3

const initialTodos = [
  { id: 0, title: 'Finish weekly challenge', completed: false },
  { id: 1, title: 'Check out new Scrimba React path', completed: true },
  { id: 2, title: 'Read the pending docs', completed: false },
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

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId))
  }

  const handleDeleteCompletedTodos = () => {
    setTodos(todos.filter((t) => !t.completed))
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
      <AddTodo onAddTodo={handleAddTodo} mode={mode} />
      <TodoList
        todos={todos}
        mode={mode}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
        onDeleteCompleted={handleDeleteCompletedTodos}
      />
    </div>
  )
}

export default App
