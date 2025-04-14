import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function TaskManager({ selectedDay }) {
    const [taskInput, setTaskInput] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editedText, setEditedText] = useState('')
    const [filter, setFilter] = useState('all')

    const dispatch = useDispatch()

    const week = useSelector((state) => state.week)

    const selected = Array.isArray(week) ? week.find((day) => day.day === selectedDay) : null
    if (!selected) {
        return <p>Please select a day to manage tasks.</p>
    }

    const handleAdd = () => {
        if (!taskInput || !selectedDay) return

        const newTask = {
            id: Date.now(),
            task: taskInput,
            completed: false
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

    const startEdit = (task) => {
        setEditingId(task.id)
        setEditedText(task.task)
    }

    const handleEditSave = () => {
        dispatch({
            type: 'editTask',
            payload: {
                day: selectedDay,
                id: editingId,
                newText: editedText
            }
        })
        setEditingId(null)
        setEditedText('')
    }

    const handleEditCancel = () => {
        setEditingId(null)
        setEditedText('')
    }
    const filteredTasks = selected?.tasks.filter((task) => {
        if (filter === 'all') return true
        if (filter === 'completed') return task.completed
        if (filter === 'active') return !task.completed
        return true
    })
    console.log(selected?.tasks)
    console.log('Filter:', filter)
    console.log('Selected Day:', selectedDay)
    console.log('All tasks:', selected?.tasks)
    console.log('Filtered tasks:', filteredTasks)
    return (

        <div>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={handleAdd}>Add</button>
            <div style={{ marginTop: '1rem' }}>
                <button onClick={() => setFilter('all')}>Show All</button>
                <button onClick={() => setFilter('active')}>Show Active</button>
                <button onClick={() => setFilter('completed')}>Show Completed</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {(filteredTasks || []).map((task) => (
                    <li key={task.id}>
                        {editingId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                                <button onClick={handleEditSave}>Save</button>
                                <button onClick={handleEditCancel}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => {
                                        console.log('Toggling completion for:', task)
                                        dispatch({
                                            type: 'filterTask',
                                            payload: {
                                                day: selectedDay,
                                                id: task.id
                                            }
                                        })
                                    }}
                                />
                                <span>{task.task}</span>
                                <button onClick={() => handleDelete(task.id)}>❌</button>
                                <button onClick={() => startEdit(task)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TaskManager