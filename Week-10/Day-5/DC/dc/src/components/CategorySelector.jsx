import { useSelector } from 'react-redux'
import { useState } from 'react'

import { selectAllTasks, selectTasksByCategory, selectCompletedTasks } from '../features/selectors'

function CategorySelector() {
    const allTasks = useSelector(selectAllTasks)
    // const categoryHome = useSelector(selectTasksByCategory('Home'))
    // const categoryWork = useSelector(selectTasksByCategory('Work'))
    // const categoryFamily = useSelector(selectTasksByCategory('Family'))
    // const categoryHealth = useSelector(selectTasksByCategory('Health'))

    const completedTasks = useSelector(selectCompletedTasks)
    const [showCompleted, setShowCompleted] = useState(false)

    const tasksToShow = showCompleted ? completedTasks : allTasks

    return (<div>
        <button onClick={() => setShowCompleted(!showCompleted)}>
            {showCompleted ? 'Show All Tasks' : 'Show Completed'}
        </button>
        <ul>
            {tasksToShow.map((task) => (
                <li key={task.id}>
                    {task.description} {task.isCompleted ? '✅' : ''}
                </li>
            ))}
        </ul>
        {/* <button onClick={categoryHome}>Home</button>
        <button onClick={categoryWork}>Work</button>
        <button onClick={categoryFamily}>Family</button>
        <button onClick={categoryHealth}>Health</button> */}
    </div>)
}

export default CategorySelector