import { useState } from "react"
import Garage from "./Garage"

function Car({ carinfo }) {
    const [color, setState] = useState('blue')
    // return <h2>This car is {carinfo.model}</h2>
    // return <h2>This car is {color} {carinfo.model}</h2>
    return <Garage size="small" />
}

export default Car