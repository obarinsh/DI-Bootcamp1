
import { useDispatch } from 'react-redux'
import { toggleTask, removeTask } from '../features/todosSlice'

function TodoItem({ task }) {
    if (!task) return null
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeTask({ id: task.id }))
    }

    const handleToggle = () => {
        dispatch(toggleTask({ id: task.id }))
    }

    return (<div
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '8px'
        }}>
        <input
            type='checkbox'
            checked={task.isCompleted}
            onChange={handleToggle}
        />
        <span style={{
            textDecoration: task.isCompleted ? 'line-through' : 'none'
        }}>{task.task}</span>
        <button onClick={handleDelete}>Delete</button>
    </div>)
}
export default TodoItem