import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddToDo'
import TodoList from './components/TodoList'
import Calendar from './components/Calendar'

function App() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0])

  return (
    <div>
      <h1>Task Manager</h1>
      <Calendar onSelectDay={setSelectedDay} />
      {selectedDay && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold">Selected Day: {selectedDay}</h2>
        </div>
      )}
      <AddTodo selectedDay={selectedDay} />
      <TodoList selectedDay={selectedDay} />
    </div>
  )
}

export default App