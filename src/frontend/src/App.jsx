import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header.jsx'
import Login from './components/login.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Login></Login>
      <div class="background-container">
        <div class="background-image"></div>
        {/* <img src="../public/background.png" alt="" class="background-image" /> */}
      </div>
    </>
  )
}

export default App
