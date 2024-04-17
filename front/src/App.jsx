import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Contato from './pages/Contato'

import NovoProjeto from './pages/NovoProjeto'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import Projetos from './pages/Projetos'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contato' element={<Contato/>}/>
        <Route exact path='/projetos' element={<Projetos/>}/>
        <Route exact path='/novoprojeto' element={<NovoProjeto/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
