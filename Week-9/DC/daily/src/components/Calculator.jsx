import { useState } from 'react'

function Calculator() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [selectedOption, setSelectedOption] = useState('')
    const [result, setResult] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const n1 = Number(num1)
        const n2 = Number(num2)

        switch (selectedOption) {
            case 'addition':
                setResult(n1 + n2)
                break
            case 'subtraction':
                setResult(n1 - n2)
                break
            case 'multiplication':
                setResult(n1 * n2)
                break
            case 'division':
                setResult(n2 !== 0 ? n1 / n2 : 'Error: Division by zero')
                break
            default:
                setResult('Please select a valid operation')
        }
    }
    return (
        <div>
            <h1>Calculator</h1>

            <form onSubmit={handleSubmit}>
                <select id='action'
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value=''>Please choose the action</option>
                    <option value='addition'>Addition</option>
                    <option value='subtraction'>Subtraction</option>
                    <option value='multiplication'>Multiplication</option>
                    <option value='division'>Division</option>

                </select >
                <div>
                    <input type="number" id="num1" placeholder="Enter First Number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    <input type="number" id="num2" placeholder="Enter Second Number" value={num2} onChange={(e) => setNum2(e.target.value)} /></div>

                <div>
                    <button type="submit">Calculate!</button>
                </div>
            </form>

            <h5>Result:{result}</h5>
        </div >
    )
}

export default Calculator 