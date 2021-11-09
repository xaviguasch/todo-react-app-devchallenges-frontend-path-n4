import TaskSelector from './components/TaskSelector'
import AddTodo from './components/AddTodo'

import './App.css'

function App() {
  return (
    <div className='App'>
      <h1 className='title'>#todo</h1>
      <AddTodo />
      <TaskSelector />
    </div>
  )
}

export default App
