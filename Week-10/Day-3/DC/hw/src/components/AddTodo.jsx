import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTask } from '../features/todosSlice'


function AddTodo({ selectedDay }) {
    const [newTask, setTask] = useState('')
    const dispatch = useDispatch()

    const handleAdd = () => {
        if (!newTask.trim() || !selectedDay) return
        dispatch(addTask({ day: selectedDay, task: newTask }))
        setTask('')
    }

    return (
        <div>
            <input
                value={newTask}
                onChange={(e) => setTask(e.target.value)}
                placeholder='New Task'
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTodo