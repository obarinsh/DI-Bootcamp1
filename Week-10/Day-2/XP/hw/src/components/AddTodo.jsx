import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../features/todoSlice'

function AddTodo() {
    const dispatch = useDispatch()
    const [task, setTask] = useState('')


    const handleAddTask = () => {
        if (!task.trim()) return

        dispatch(addTodo({
            id: Date.now(),
            task,
            isCompleted: false
        }))

        setTask('')
    }
    return (<div>
        <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder='Add your todo' />
        <button onClick={handleAddTask}>Add</button>

    </div>)

}
export default AddTodo