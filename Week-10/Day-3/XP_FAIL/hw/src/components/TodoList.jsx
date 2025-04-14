import { useSelector } from "react-redux"
import TodoItem from './TodoItem'


function TodoList() {
    const taskList = useSelector((state) => state.todos)

    return (<div>
        {taskList.map((task) => (
            <TodoItem key={task.id} task={task} />
        ))}

    </div >)
}

export default TodoList