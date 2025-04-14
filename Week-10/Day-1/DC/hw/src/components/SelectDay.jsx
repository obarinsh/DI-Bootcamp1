import { useSelector } from 'react-redux'
import { useState } from 'react'


function SelectDay({ onSelect }) {

    const week = useSelector((state) => state.week)
    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        setSelected(e.target.value)
        onSelect(e.target.value)
    }

    return (
        <div>
            <select value={selected} onChange={handleChange}>
                <option value="" disabled>Day of the week</option>
                {Array.isArray(week) &&
                    week.map((dayObj) => (
                        <option key={dayObj.day} value={dayObj.day}>
                            {dayObj.day}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export default SelectDay