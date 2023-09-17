import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/cadastro/Login'
import CadAnimal from './pages/cadastro/CadAnimal'
import Animal from './pages/navegacao/Animal'
import CadUsuario from './pages/cadastro/CadUsuario'
import Ficha from './pages/Ficha'
import Temporario from './pages/Temporario'
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Temporario />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/CadAnimal" element={<CadAnimal />} />
        <Route exact path="/Animal" element={<Animal />} />
        <Route exact path="/CadUsuario" element={<CadUsuario />} />
        <Route exact path="/Ficha" element={<Ficha />} />
      </Routes>
    </Router>
  )
}

export default App
