import { useState } from 'react'
import quotes from './quotes'

let lastQuote = ''

const getRandColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    let body = document.querySelector('body')
    body.style.backgroundColor = color
    return color
}

const getRandomQuote = () => {

    let sentences = quotes
    let randomQuote = ''
    do {
        const index = Math.floor(Math.random() * sentences.length)
        randomQuote = sentences[index]
    } while (randomQuote === lastQuote && sentences.length > 1)
    lastQuote = randomQuote
    return randomQuote
}


function Header() {
    const [quoteObj, setQuoteObj] = useState(getRandomQuote())
    const [color, setColor] = useState(getRandColor())

    return (

        <div style={{ backgroundColor: 'white', border: '2px solid black' }}>
            <h1 >{quoteObj.quote}</h1>
            <h5 >{quoteObj.author}</h5>
            <button style={{ border: '1px solid black' }} onClick={() => {
                setQuoteObj(getRandomQuote())
                setColor(getRandColor())
            }}>
                New quotes
            </button>
        </div >

    )
}


export default Header