import React from 'react'

interface Greet {
    name: string
    messageCount: number

}

const Greeting: React.FC<Greet> = ({ name, messageCount }) => {
    return (
        <h1>
            Hello, {name}! You have {messageCount} new messages.
        </h1>)
}

export default Greeting
