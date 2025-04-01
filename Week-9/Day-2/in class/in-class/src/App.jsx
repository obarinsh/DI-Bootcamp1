import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  useEffect(() => {
    console.log("hi, I'm useEffect!")


  }, [])

  return (
    <>
      <h2>Day 4 - Routering</h2>
      {show ? <Dashboard /> : null}
      <div>
        <button onClick={() => setShow(!show) >
          
        }{show ? "Now show" : "Show"}>Toggle Dashboard</button>
      </div>
    </>
  )
}

export default App
