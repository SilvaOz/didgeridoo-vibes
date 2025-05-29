import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Terapias from './pages/Terapias'
import Clases from './pages/Clases'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terapias" element={<Terapias />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  )
}
