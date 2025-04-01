import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HandleSubmit from './components/HandleSubmit'

function App() {
  console.log("Rendering App")
  const [value, setValue] = useState('')
  return (
    <div>
      <Header />
      <HandleSubmit value={value} setValue={setValue} />


    </div>
  )
}

export default App
