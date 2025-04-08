import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCalendar from './components/CreateCalendar'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <>
      <CreateCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AddTask selectedDate={selectedDate} />
      <TaskList selectedDate={selectedDate} />
    </>
  )
}

export default App
