import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function TaskManager({ selectedDay }) {
    const [taskInput, setTaskInput] = useState('')
    const dispatch = useDispatch()
    const week = useSelector((state) => state)

    const selected = week.find((day) => day.day === selectedDay)
    const handleAdd = () => {
        if (!taskInput || !selectedDay) return

        const newTask = {
            id: Date.now(),
            task: taskInput
        }

        dispatch({
            type: 'addTask',
            payload: {
                day: selectedDay,
                task: newTask
            }
        })

        setTaskInput('')
    }


    const handleDelete = (taskId) => {
        dispatch({
            type: 'removeTask',
            payload: {
                day: selectedDay,
                id: taskId
            }
        })
    }
    return (
        <div>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={handleAdd}>
                Add
            </button>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {selected?.tasks.map((task) => (
                    <li
                        key={task.id}
                    >
                        <span>{task.task}</span>
                        <button onClick={() => handleDelete(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default TaskManager