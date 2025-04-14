import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeDisplay from './components/AgeDisplay'
import AgeControls from './components/AgeControls'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
    <>
      <AgeDisplay />
      <AgeControls />
    </>
  )
}

export default App
