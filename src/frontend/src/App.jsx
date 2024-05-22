import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header.jsx'
import Login from './components/login.jsx'
import Cadastro from './components/cadastro.jsx'
import CardExer from './components/card-exercicios.jsx'
import CardHist from './components/historico-card.jsx'
import Lista from './components/lista.jsx'
import ListaHist from './components/historico-lista.jsx'
import Dados from './components/dados-perfil.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const pages = {
    Lista: <Lista></Lista>,
    Dados: <Dados></Dados>,
    Hist: <ListaHist></ListaHist>
  }

  const [mode, setMode] = useState(pages['Lista']);

  const onClickDados = () => {
    setMode(pages['Dados']);
  }

  const onClickHist = () => {
    setMode(pages['Hist']);
  }

  const onClickLista = () => {
    setMode(pages['Lista']);
  }
 
  return (
    <>
      <Header/>
      <div class="actions">
          <div class="mdi mdi-home" onClick={onClickDados}></div>
          <div class="mdi mdi-clock" onClick={onClickHist}></div>
          <div class="mdi mdi-mdi-format-list-bulleted-square" onClick={onClickLista}>☢︎</div>
      </div>
      {mode}
      <div class="background-container">
        <div class="background-image"></div>
      </div>
    </>
  )
}

export default App
