import { useState } from 'react'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function Calendar({ onSelectDay }) {
    const [selectedDay, setSelectedDay] = useState(null)

    const handleClick = (day) => {
        setSelectedDay(day)
        onSelectDay?.(day)
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 p-4">
            {days.map((day) => (
                <div
                    key={day}
                    className={`cursor-pointer p-4 rounded-md shadow ${day === selectedDay ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
                        }`}
                    onClick={() => handleClick(day)}
                >
                    <h3 className="text-center font-semibold">{day}</h3>
                </div>
            ))}
        </div>
    )
}

export default Calendar