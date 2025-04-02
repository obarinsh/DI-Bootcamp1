import { useRef, useState } from 'react'

function CharCount() {
    const inputRef = useRef(null)
    const [count, setCount] = useState(0)


    const handleChange = () => {
        const value = inputRef.current.value
        const lettersOnly = value.split('').filter(char => /[a-zA-Z]/.test(char))

        setCount(lettersOnly.length)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Enter your text"
                ref={inputRef}
                onChange={handleChange} />

            <h3>Letter Counter:{count} </h3>
        </form>
    )
}

export default CharCount