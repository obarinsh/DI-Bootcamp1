import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from './features/actions'
import { toggleStatus } from './features/reducer'

function App() {
  const [taskInput, setInputValue] = useState('')
  const dispatch = useDispatch()

  const taskList = useSelector((state) => state)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskInput.trim() !== '') {
      dispatch(addTask(taskInput))
      setInputValue('')
    }
  }
  return (
    <>
      <div id='task-list'>
        <h1>Task List</h1>
        <form onSubmit={handleSubmit}>
          <div>Please add your task:</div>
          <input type='text'
            value={taskInput}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button id='add' type='submit'>Add</button>
        </form>
        <ul>

          {taskList.map((task) => (
            <p

              key={task.id} >
              <input
                type='checkbox'
                onClick={() => dispatch(toggleStatus(task.id))}>
              </input>
              {/* {task.task} {task.completed ? 'line-through' : 'none'} */}
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
                }}
              >
                {task.task}
              </span>
              <button id='delete' onClick={() => dispatch(removeTask(task.id))}>
                Delete
              </button>

            </p>
          ))}
        </ul >


      </div >
    </>
  )
}

export default App
