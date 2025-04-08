import { useSelector } from 'react-redux'
function ToDoList() {
    const todos = useSelector(state => state.todo)
    return (<div>
        <h1>To Do List</h1>
        {/* {todos.map(todo =>
            <li key={todo.id}>{todo.task}</li>
        )} */}


    </div>)

}
export default ToDoList