import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { selectAllTasks, deleteTask, editTask, updateProgress, addNewTask } from '../features/slice'
import CategorySelector from './CategorySelector'

function TaskList() {
    const data = useSelector((state) => state.tasksList || [])
    const dispatch = useDispatch()

    const allTasks = useSelector(selectAllTasks)
    const [visibleTasks, setVisibleTasks] = useState([])
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('Home')

    const [currentlyEditingId, setCurrentlyEditingId] = useState(null)
    const [editText, setEditText] = useState('')



    const handleAddNewTask = () => {
        if (!description.trim()) return
        dispatch(addNewTask({ description, category }))
        setDescription('')
    }

    const handleDelete = (taskId) => {
        dispatch(deleteTask({ id: taskId }))
    }

    const handleEditStart = (task) => {
        setCurrentlyEditingId(task.id)
        setEditText(task.description)
    }

    const handleEditSave = (taskId) => {
        dispatch(editTask({
            id: taskId,
            editedTask: { description: editText }
        }))
        setCurrentlyEditingId(null)
        setEditText('')
    }

    const handleToggle = (taskId) => {
        dispatch(updateProgress({ id: taskId }))
    }

    return (<div>
        <h1>Tasks:</h1>
        <div><button onClick={() => setVisibleTasks(allTasks)}>All Tasks</button></div>
        <CategorySelector />
        <input
            type="text"
            placeholder="Add task here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
        </select>
        <button onClick={handleAddNewTask}>New Task</button>

        {data && (<div style={{ marginTop: '1rem' }}>
            {allTasks.map((task) => (
                <div key={task.id}>
                    <input
                        type='checkbox'
                        checked={task.isCompleted}
                        onChange={() => handleToggle(task.id)}
                    />
                    {currentlyEditingId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button onClick={() => handleEditSave(task.id)}>Save</button>
                            <button onClick={() => setCurrentlyEditingId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            {task.description}
                            <button onClick={() => handleEditStart(task)}>Edit</button>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
        )}
    </div>
    )
}

export default TaskList