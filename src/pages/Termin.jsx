import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroStatic from '../components/HeroStatic'
import { Link } from 'react-router-dom'

export default function Buchen() {
  return (
    <>
      <Navbar />
      <HeroStatic image="/images/buchen.jpg" title="Reservar una experiencia" />

      <main className="px-6 py-16 max-w-2xl mx-auto text-gray-300 space-y-10">
        <section className="text-center">
          <h2 className="text-3xl font-serif mb-4 text-white">¿Listo para comenzar tu viaje?</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Reserva tu espacio para una sesión, taller o colaboración. Este es el primer paso para conectar con la medicina del didgeridoo.
          </p>
        </section>

        <section className="bg-white/5 p-6 rounded-xl shadow-md space-y-6 border border-white/10">
          <h3 className="text-2xl font-semibold text-white text-center">Formulario de Reserva</h3>

          {/* Aquí se puede incrustar Amelia u otro sistema */}
          <iframe
            src="https://your-amelia-url.com"
            title="Calendario de reservas"
            className="w-full h-[600px] rounded-md border-none"
          />

          <p className="text-center text-sm text-gray-400">
            * Si prefieres agendar por teléfono o necesitas algo especial, <Link to="/contacto" className="underline text-white">escríbeme aquí</Link>.
          </p>
        </section>

        <section className="text-center">
          <h4 className="text-xl font-semibold text-white">¿Dudas antes de reservar?</h4>
          <p className="text-lg text-gray-400 mt-2">
            Podemos tener una breve llamada para alinear intenciones. A veces, eso es todo lo que se necesita para abrir el camino.
          </p>

          <div className="mt-6">
            <Link
              to="/contacto"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Solicitar llamada
            </Link>
          </div>
        </section>

        <section className="text-center">
          <h4 className="text-xl font-semibold text-white">Métodos de pago</h4>
          <p className="text-lg text-gray-400 mt-2">
            Una vez reservada tu cita, recibirás un correo con el método de pago: <strong>PayPal, transferencia bancaria o efectivo</strong>.
            También recibirás la confirmación en tu calendario.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
