import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form.jsx'
import ReturnForm from './Components/ReturnForm.jsx'
function App() {
  const [data, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    dietaryRestrictions: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    }
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (data) => {
    setFormData(data)
    setIsSubmitted(true)
  }
  return (
    <div>
      <Form data={data} setFormData={handleSubmit} />
      {isSubmitted && <ReturnForm data={data} />}
    </div>
  )
}

export default App
