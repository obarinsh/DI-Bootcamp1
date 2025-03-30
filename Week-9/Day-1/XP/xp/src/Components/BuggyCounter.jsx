
import React from 'react'
import { useState } from 'react'

const BuggyCounter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }
    if (counter === 5) {
        throw new Error('I crashed!')
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>Increment</button>
        </div >
    )
}

export default BuggyCounter