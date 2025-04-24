import React, { useState } from 'react'


const Counter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0)
    const [lastAction, setLastAction] = useState<'increment' | 'decrement' | 'none'>('none')

    const handleIncrement = () => {
        setCounter(prev => prev + 1)
        setLastAction('increment')

    }

    const handleDecrement = () => {
        setCounter(prev => prev - 1)
        setLastAction('decrement')

    }
    return (
        <div>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h2>{counter}</h2>
            <h3>Last action performed: {lastAction}</h3>
        </div>
    )
}

export default Counter
