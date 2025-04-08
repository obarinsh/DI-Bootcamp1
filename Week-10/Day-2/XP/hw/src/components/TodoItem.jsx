import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todoSlice'

function ToDoItem() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo)


    const handleRemoveTask = (id) => {
        dispatch(removeTodo(id))
    }

    const handleToggleTask = (id) => {
        dispatch(toggleTodo(id))
    }
    return (<div>
        {todos.map(todo => (
            <div
                key={todo.id}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleToggleTask(todo.id)}
                />
                <span
                    style={{
                        textDecoration: todo.isCompleted ? 'line-through' : 'none',
                        color: todo.isCompleted ? '#aaa' : '#000',
                        flexGrow: 1
                    }}
                >
                    {todo.task}
                </span>
                <button onClick={() => handleRemoveTask(todo.id)}>Delete</button>

            </div>))}


    </div>)

}
export default ToDoItem