import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Votes from './Components/Votes.jsx'


function App() {
  // const [count, setCount] = useState(0)
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ])
  const addVote = (index) => {
    const updatedLanguages = [...languages]
    updatedLanguages[index].votes++
    setLanguages(updatedLanguages)
  }

  return (
    <>
      {languages.map((lang, index) => (
        <Votes key={index} language={lang} addVote={() => addVote(index)} />
      ))}

    </>
  )
}

export default App
