import { useState } from 'react'

// Create a new Functional Component named Phone. Use 
// the state hook to create the following state variables:

// In the return of the Phone component, 
// display the values of the state variables.


// Import the Phone component and display it in your 
// App.js.

// Expected output (without the grey border):
function Phone() {
    const [brand, setBrand] = useState('Samsung');
    const [model, setModel] = useState('Galaxy S20');
    const [color, setColor] = useState('black');
    const [year, setYear] = useState(2020);
    const changeColor = () => {
        setColor('blue');
    }

    return (
        <div>
            <h1>My phone is {brand}</h1>
            <h2>It is {color} {model} from {year}</h2>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default Phone

