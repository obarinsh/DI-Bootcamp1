import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTask } from '../features/taskSlice'

function AddTask({ selectedDate }) {

    const [taskText, setText] = useState('')
    const dispatch = useDispatch()


    const handleAdd = () => {
        if (!selectedDate) return alert('Please select a date first')
        if (!taskText.trim()) return

        dispatch(addTask({
            date: selectedDate.toLocaleDateString('sv-SE'),
            newTask: {
                id: Date.now().toString(),
                task: taskText
            }
        }))
        setText('')
    }

    return (<>
        <input value={taskText}
            onChange={e => setText(e.target.value)}
            placeholder="Enter a task" />
        <button onClick={handleAdd}>Add</button>
    </>)
}

export default AddTask