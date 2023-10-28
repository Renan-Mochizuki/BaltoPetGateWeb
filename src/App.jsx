import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/cadastro/Login'
import CadAnimal from './pages/cadastro/CadAnimal'
import Home from './pages/Home'
import CadUsuario from './pages/cadastro/CadUsuario'
import Ficha from './pages/Ficha'
import AlterarImg from './pages/AlterarImg'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/CadAnimal" element={<CadAnimal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CadUsuario" element={<CadUsuario />} />
        <Route path="/Ficha/:id" element={<Ficha />} />
        <Route path="/AlterarImg" element={<AlterarImg />} />
      </Routes>
    </Router>
  )
}

export default App
