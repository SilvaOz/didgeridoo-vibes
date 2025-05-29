import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-serif text-sm">Didgeridoo Flow</h1>

        <nav className="hidden md:flex space-x-6 text-white text-sm">
          <Link to="/">Inicio</Link>
          <Link to="/terapias">Terapias</Link>
          <Link to="/clases">Clases</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <button 
          className="md:hidden text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur text-white px-4 py-2 space-y-2 space-x-6">
          <Link to="/" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Inicio</Link>
          <Link to="/terapias" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Terapias</Link>
          <Link to="/clases" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Clases</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Contacto</Link>
        </div>
      )}
    </header>
  )
}
