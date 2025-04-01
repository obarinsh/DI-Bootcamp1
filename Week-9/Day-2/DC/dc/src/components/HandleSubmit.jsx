
import { useState } from "react"
function HandleSubmit({ value, setValue }) {
    const [responseMessage, setResponseMessage] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        console.log("Form submitted", value)
        try {
            const response = await fetch('http://localhost:3001/api/world', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: value })
                ,
            })
            console.log("Got response object:", response)
            const text = await response.json()
            setResponseMessage(text.reply)
            console.log("Value:", text)
            console.log(`Server response :${value}`)
        } catch (error) {
            console.error('Error fetching message:', error)
        }

    }
    return (
        <div>
            <h1>Post to Server:</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>

            {responseMessage && <p>{responseMessage}</p>}
        </div>
    )
}
export default HandleSubmit