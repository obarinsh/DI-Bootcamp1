import { useState } from "react"

function Form({ data, setFormData }) {
    const [formState, setFormState] = useState(data)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            setFormState((prev) => ({
                ...prev,
                dietaryRestrictions: {
                    ...prev.dietaryRestrictions,
                    [name]: checked
                }
            }))
        } else {
            setFormState((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(formState)
    }
    return (
        <div>
            <header>Sample form</header>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} />
                </label>
                <br />

                <label>
                    Age:
                    <input type="number" name="age" value={formState.age} onChange={handleChange} />
                </label>
                <br />

                <input type="radio" name="gender" value='male'
                    checked={formState.gender === 'male'}
                    onChange={handleChange} /> Male
                <input type="radio" name="gender" value="female"
                    checked={formState.gender === 'female'}
                    onChange={handleChange} />Female

                <h3>Select you destination</h3>
                <select
                    name="destination"
                    value={formState.destination}
                    onChange={handleChange}
                >
                    <option value=''>--Please Choose a destination--</option>
                    <option value='Thailand'>Thailand</option>
                    <option value='Japan'>Japan</option>
                    <option value='Brasil'>Brasil</option>
                </select>
                <br />

                <h3>Dietary restrictions</h3>
                <label>
                    <input
                        type="checkbox"
                        name="nutsFree"
                        checked={formState.dietaryRestrictions.nutsFree}
                        onChange={handleChange}
                    /> Nuts free
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="lactoseFree"
                        checked={formState.dietaryRestrictions.lactoseFree}
                        onChange={handleChange}
                    /> Lactose free
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="vegan"
                        checked={formState.dietaryRestrictions.vegan}
                        onChange={handleChange}
                    /> Vegan
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )

}


export default Form