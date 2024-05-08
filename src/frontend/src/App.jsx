import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header.jsx'
import Login from './components/login.jsx'
import Cadastro from './components/cadastro.jsx'
import CardExer from './components/card-exercicios.jsx'
import Lista from './components/lista.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Login></Login> */}
      <Lista></Lista>
      <div class="background-container">
        <div class="background-image"></div>
        {/* <img src="../public/background.png" alt="" class="background-image" /> */}
      </div>
    </>
  )
}

export default App
