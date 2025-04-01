import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/ProfileScreen'
import ShopScreen from './components/ShopScreen'
import PostList from './components/PostList'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

// Exercise 1 : React Router Error Boundary
// function App() {

//   return (
//     <BrowserRouter>
//       <nav className="nav">
//         <NavLink className="nav-link" to="/">Home</NavLink>
//         <NavLink className="nav-link" to="/profile">Profile</NavLink>
//         <NavLink className="nav-link" to="/shop">Shop</NavLink>
//       </nav>


//       <Routes>

//         <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
//         <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
//         <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// Exercise 2 : Display JSON Data in React JS
// function App() {

//   return (
//     <PostList />
//   )

// }

// Exercise 3 : Display JSON Data and parse it
// function App() {

//   return (
//     // <><Example1 />
//     // <Example2 />
//     <Example3 />

//   )

// }

// Exercise 4 : Post JSON Data with React JS

function App() {

  const uniqueURL = "https://webhook.site/b021111b-91c7-4a7e-9a7b-d7c1d21bd1ff"

  async function sendData() {
    const response = await fetch(uniqueURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27
      })
    })
    const data = await response.json()
    console.log(data)
    return data
  }


  return (
    <button onClick={sendData}>Press me to post some data</button>

  )

}
export default App
