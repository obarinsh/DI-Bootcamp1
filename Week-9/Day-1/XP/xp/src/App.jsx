import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundry from './Components/ErrorBoundry'
import BuggyCounter from './Components/BuggyCounter'
import Color from './Components/Color'
import Child from './Components/Child'
function App() {

  return (
    <div>
      {/* <h2>Two buggyCounters inside one errorBoundry</h2> */}
      {/* <h2>First counter inside errorBoundry</h2>
      <ErrorBoundry>
        <BuggyCounter />
      </ErrorBoundry>
      <h2>Second counter inside errorBoundry</h2>
      <ErrorBoundry>
        <BuggyCounter />
      </ErrorBoundry> */}
      {/* <BuggyCounter /> */}
      {/* <Color /> */}
      <Child />
    </div>
  )
}






export default App
