import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList({ selectedDay }) {
    const tasks = useSelector((state) => state.todos.tasksByDay[selectedDay] || [])

    return (
        <div>
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} day={selectedDay} />
            ))}
        </div>
    )
}

export default TodoList