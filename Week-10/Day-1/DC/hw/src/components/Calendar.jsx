import { useSelector } from 'react-redux'


function Calendar() {
    const week = useSelector(state => state.week)
    return (
        <div className="calendar grid grid-cols-1 md:grid-cols-7 gap-4 p-4">
            {week.map((dayObj) => (
                <div key={dayObj.day} className="bg-white p-3 rounded shadow-md">
                    <h2 className="font-bold text-lg mb-2 text-center">{dayObj.day}</h2>
                    <ul>
                        {dayObj.tasks.map((task) => (
                            <li key={task.id} className="text-sm bg-gray-100 p-1 mb-1 rounded">
                                {task.task}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )


}
export default Calendar