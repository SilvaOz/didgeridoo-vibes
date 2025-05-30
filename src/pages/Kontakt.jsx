import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroStatic from '../components/HeroStatic'

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <HeroStatic image="/images/contact.jpg" title="Contacto" />

      <main className="px-6 py-16 max-w-2xl mx-auto text-gray-300 space-y-12">
        <section className="text-center">
          <h2 className="text-3xl font-serif mb-4 text-white">¿Quieres hablar conmigo?</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Si tienes preguntas, ideas, propuestas o simplemente quieres conectar, este es el lugar.
            Estoy abierto a escuchar y co-crear, con intención y presencia.
          </p>
        </section>

        <section className="space-y-6 text-gray-400">
          <div>
            <h3 className="text-xl text-white font-semibold mb-1">📧 Email</h3>
            <p>
              <a href="mailto:tuemail@ejemplo.com" className="underline hover:text-white">
                tuemail@ejemplo.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-1">📱 WhatsApp / Teléfono</h3>
            <p>
              <a href="https://wa.me/49XXXXXXX" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                +49 XXX XXX XXXX
              </a>
            </p>
            <p className="text-sm text-gray-500">* Puedes mandar un mensaje de voz si lo prefieres.</p>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-1">🌐 Redes sociales</h3>
            <p className="space-x-4">
              <a href="https://instagram.com/tuperfil" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                Instagram
              </a>
              <a href="https://facebook.com/tuperfil" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                Facebook
              </a>
            </p>
          </div>
        </section>

        <section className="text-center pt-8">
          <p className="text-lg leading-relaxed text-gray-400">
            También puedes usar el formulario de reserva si tienes claro lo que deseas:
          </p>
          <a
            href="/buchen"
            className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Ir a Reservas
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}
