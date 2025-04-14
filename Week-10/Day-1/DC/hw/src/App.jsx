import { useState } from 'react'
import { useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './components/Calendar'
import SelectDay from './components/SelectDay'
import TaskManager from './components/TaskManager'
function App() {
  const week = useSelector((state) => state.week)
  const [filteredDay, setFilteredDay] = useState('')


  const selected = week?.find((day) => day.day === filteredDay)
  if (!week || !Array.isArray(week)) {
    return <p>Loading or no data</p>
  }
  return (
    <div>
      <h1>Task Manager</h1>
      <div>

      </div>
      <div>
        <SelectDay onSelect={setFilteredDay} />
        {selected ? (
          <div>
            <h2>{selected.day}</h2>
          </div>
        ) : (
          <p>Please select a day</p>
        )}

        <TaskManager selectedDay={filteredDay} />
      </div>

    </div>
  )
}

export default App
