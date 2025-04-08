import { useSelector, useDispatch } from 'react-redux'

function TaskList({ selectedDate }) {
    const tasksByDate = useSelector(state => state.dailyTasks)
    console.log('tasksByDate:', tasksByDate)
    const formattedDate = selectedDate?.toLocaleDateString('sv-SE')
    const day = Array.isArray(tasksByDate)
        ? tasksByDate.find(entry => entry.date === formattedDate)
        : null

    if (!selectedDate) return <p>Please select a date to view tasks.</p>

    if (!day || day.tasks.length === 0) {
        return <p>No tasks for {formattedDate}.</p>
    }
    return (<div>
        {day?.tasks.map(task => (
            <li key={task.id}>{task.task}</li>
        ))}
    </div>)
}

export default TaskList