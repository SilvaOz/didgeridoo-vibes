import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroStatic from '../../components/HeroStatic'
import SubNavAngebote from '../../components/SubNavAngebote'
import { Link } from 'react-router-dom'

export default function Preise() {
  return (
    <>
      <Navbar />
      <HeroStatic image="/images/preise.jpg" title="Preise" />
      <SubNavAngebote />

      <main className="px-6 py-16 max-w-3xl mx-auto text-gray-300 space-y-10">
        <section>
          <h2 className="text-3xl font-serif text-white mb-4">Precios con alma</h2>
          <p className="text-lg leading-relaxed">
            Cada sesión, taller o presentación es única. Aquí comparto valores base para que tengas una orientación clara. Todos los precios incluyen impuestos (inkl. MwSt.).
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Healing Sessions</h3>
          <ul className="text-lg text-gray-400 space-y-2">
            <li>🔹 Individual (60 min): <strong>60 €</strong></li>
            <li>🔹 Grupo pequeño (hasta 5 personas): <strong>90 €</strong></li>
            <li>🔹 Circulares grupales / eventos holísticos: <strong>a partir de 120 €</strong></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Workshops</h3>
          <ul className="text-lg text-gray-400 space-y-2">
            <li>🔹 Introductorio grupal (2h): <strong>30 € por persona</strong></li>
            <li>🔹 Sesión privada 1:1 (90 min): <strong>75 €</strong></li>
            <li>🔹 Taller intensivo (medio día): <strong>a partir de 150 €</strong></li>
            <li>🔹 Retiros o diseño personalizado: <strong>a convenir</strong></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Eventos & Performances</h3>
          <ul className="text-lg text-gray-400 space-y-2">
            <li>🔹 Ceremonias / bodas / aperturas: <strong>a partir de 180 €</strong></li>
            <li>🔹 Festivales o escenarios grandes: <strong>a convenir</strong></li>
            <li>🔹 Intervenciones breves o colaboraciones: <strong>consultar</strong></li>
          </ul>
        </section>

        <CallToAction text="Reservar una sesión" />

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Métodos de pago</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Puedes pagar cómodamente por <strong>Paypal, transferencia bancaria</strong> o en efectivo si es presencial. 
            Al reservar recibirás todos los detalles por correo.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">¿Necesitas algo especial?</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Estoy abierto a adaptar mis precios si hay verdadera intención. También ofrezco intercambios conscientes en casos específicos.
            Lo importante es que el valor fluya y que ambas partes estén en equilibrio.
          </p>
        </section>

        <CallToAction text="Agendar una llamada para consultar" />
      </main>

      <Footer />
    </>
  )
}

function CallToAction({ text }) {
  return (
    <div className="text-center my-12">
      <Link
        to="/buchen"
        className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        {text}
      </Link>
    </div>
  )
}
