import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTask } from '../features/todosSlice'


function AddTodo() {

    const [newTask, setTask] = useState('')
    const dispatch = useDispatch()

    const handleAdd = () => {
        if (newTask.trim() === '') return
        dispatch(addTask({ task: newTask }))
        setTask('')
    }

    return (<div>
        <input
            value={newTask}
            onChange={(e) => setTask(e.target.value)}
            pleaceholder='New Task'
        />
        <button onClick={handleAdd}>Add</button>
    </div >)
}

export default AddTodo