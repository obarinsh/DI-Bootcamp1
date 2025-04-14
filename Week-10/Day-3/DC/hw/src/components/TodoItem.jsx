import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, removeTask, editTask } from '../features/todosSlice'

function TodoItem({ task, day }) {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(task.task)

    if (!task) return null

    const handleDelete = () => {
        dispatch(removeTask({ day, id: task.id })) // ✅ include `day`
    }

    const handleToggle = () => {
        dispatch(toggleTask({ day, id: task.id })) // ✅ include `day`
    }

    const handleSave = () => {
        if (!newText.trim()) return
        dispatch(editTask({ day, id: task.id, newText }))
        setIsEditing(false)
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '8px'
            }}
        >
            <input type="checkbox" checked={task.isCompleted} onChange={handleToggle} />

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleSave}>💾</button>
                    <button onClick={() => setIsEditing(false)}>❌</button>
                </>
            ) : (
                <>
                    <span
                        style={{
                            textDecoration: task.isCompleted ? 'line-through' : 'none'
                        }}
                    >
                        {task.task}
                    </span>
                    <button onClick={() => setIsEditing(true)}>✏️</button>
                    <button onClick={handleDelete}>🗑️</button>
                </>
            )}
        </div>
    )
}

export default TodoItem