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
import { getAllExercicio } from '../api/requests.js'
import './App.css'

function App() {
  const modes = { Lista: 'Lista', Dados: 'Dados', Hist: 'Hist', Login: 'Login', Cadastro: 'Cadastro' }

  const pages = {
    Lista: <Lista></Lista>,
    Dados: <Dados></Dados>,
    Hist: <ListaHist></ListaHist>,
  }

  const [mode, setMode] = useState(modes['Login']);
  // mode = modes['Login']

  const setModeDados = () => {
    setMode(modes['Dados']);
  }

  const setModeHist = () => {
    setMode(modes['Hist']);
  }

  const setModeLista = async () => {
    setMode(modes['Lista']);
    let res = await getAllExercicio();
    let a = 'a'
  }

  const setModeSair = () => {
    setMode(modes['Login']);

  }

  const setModeCadastro = () => {
    setMode(modes['Cadastro']);
  }

  const telaLogin = () => {
    return <Login onLogin={setModeLista} onCadastro={setModeCadastro}></Login>
  }

  const telaCadastro = () => {
    return <Cadastro onCreate={setModeLista}></Cadastro>
  }

  pages.Login = telaLogin();
  pages.Cadastro = telaCadastro();

  const renderTelas = () => {
    if (mode !== modes['Login'] && mode !== modes['Cadastro']) {
      return (
        <>
          <div class="mdi mdi-home" onClick={setModeDados}></div>
          <div class="mdi mdi-clock" onClick={setModeHist}></div>
          <div class="mdi mdi-format-list-bulleted-square" onClick={setModeLista}></div>
          <div class="mdi mdi-logout" onClick={setModeSair}></div>
        </>
      )
    }
  }

  return (
    <>
      <Header />
      <div class="actions">
        {renderTelas()}
      </div>
      {pages[mode]}
      <div class="background-container">
        <div class="background-image"></div>
      </div>
    </>
  )
}

export default App
