import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function CreateCalendar({ selectedDate, setSelectedDate }) {

    const handleChange = (date) => {
        setSelectedDate(date)
        console.log('Selected date:', date.toLocaleDateString('sv-SE'))
    }

    return (<>
        <div>
            <Calendar onChange={handleChange} value={selectedDate} />
            <p>Selected: {selectedDate.toDateString()}</p>
        </div></>)
}

export default CreateCalendar