import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import ToDoList from './components/ToDoList'
import TodoItem from './components/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
      <ToDoList />
      <TodoItem />
    </>
  )
}

export default App
