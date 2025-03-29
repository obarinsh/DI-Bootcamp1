import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Car from './Components/Car.jsx'
// import Events from './Components/Events.jsx'
// import Phone from './Components/Phone.jsx'
import Color from './Components/Color.jsx'

function App() {
  const [count, setCount] = useState(0)

  // const carinfo = { name: "Ford", model: "Mustang" }

  return (
    <>
      {<Color />}
      {/* {<Phone />} */}
      {/* <Events /> */}
      {/* <div>
        <Car carinfo={carinfo} />
      </div> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
