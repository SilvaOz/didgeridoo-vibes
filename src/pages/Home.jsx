import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#0a2e38] min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
