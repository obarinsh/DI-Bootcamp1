import { useSelector } from 'react-redux'
import { useState } from 'react'


function SelectDay({ onSelect }) {
    const week = useSelector(state => state)
    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        setSelected(e.target.value)
        onSelect(e.target.value) // pass to parent
    }

    return (
        <div>

            <select value={selected} onChange={handleChange}>
                <option value="" disabled>Day of the week</option>
                {week.map((dayObj) => (
                    <option key={dayObj.day} value={dayObj.day}>
                        {dayObj.day}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectDay