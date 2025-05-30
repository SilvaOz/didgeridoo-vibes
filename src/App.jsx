import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from './pages/Home'
import Angebote from './pages/angebote/index'
import Clases from './pages/Termin'
import Contacto from './pages/Kontakt'
import Didgeridoo from './pages/Didgeridoo'
import Healing from './pages/angebote/Healing'
import Events from './pages/angebote/Events'
import Workshops from './pages/angebote/Workshops'
import Preise from './pages/angebote/Preise'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => t,
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/didgeridoo" element={<Didgeridoo />} />
        <Route path="/angebote" element={<Angebote />} />
        <Route path="/angebote/healing" element={<Healing />} />
        <Route path="/angebote/events" element={<Events />} />
        <Route path="/angebote/workshops" element={<Workshops />} />
        <Route path="/angebote/preise" element={<Preise />} />

        <Route path="/termin-buchen" element={<Clases />} />
        <Route path="/kontakt" element={<Contacto />} />
      </Routes>
    </Router>
  )
}
