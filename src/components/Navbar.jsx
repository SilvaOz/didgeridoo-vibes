import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif text-sm">
          WIRAQOCHA WAVES
        </Link>

        <nav className="hidden md:flex space-x-6 text-black text-sm">
          <Link to="/">Startseite</Link>
          <Link to="/didgeridoo">Didgeridoo</Link>
          <Link to="/angebote">Angebote</Link>
      
          <Link to="/clases">Buchen</Link>
          <Link to="/contacto">Kontakt</Link>
        </nav>

        <button 
          className="md:hidden text-black" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menü */}
      {menuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur text-white px-4 py-2 space-y-2 space-x-6">
          <Link to="/" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Startseite</Link>
          <Link to="/didgeridoo" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Didgeridoo</Link>
          <Link to="/angebote" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Angebote</Link>
          <Link to="/termin-buchen" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Termin Buchen</Link>
          <Link to="/kontakt" onClick={() => setMenuOpen(false)}
          className='hover:underline'
          >Kontakt</Link>
        </div>
      )}
    </header>
  )
}
