import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './components/PostsList'
import FilterPosts from './components/FilterPosts'


function App() {


  return (
    <>
      <p> The post project</p>
      <FilterPosts />
      <PostsList />
    </>
  )
}

export default App
