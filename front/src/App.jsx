import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import NovoProjeto from './pages/NovoProjeto'


import Container from './components/layouts/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contato'>Contato</Link></li>
        <li><Link to='/empresa'>Empresa</Link></li>
        <li><Link to='novoprojeto'>Novo projeto</Link></li>
      </ul>
      <Routes>


        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contato' element={<Contato/>}/>
        <Route exact path='/empresa' element={<Empresa/>}/>
        <Route exact path='/novoprojeto' element={<NovoProjeto/>}/>

      </Routes>
    </Router>
  )
}

export default App
