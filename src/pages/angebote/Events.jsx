import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroStatic from '../../components/HeroStatic'
import SubNavAngebote from '../../components/SubNavAngebote'
import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <>
      <Navbar />
      <HeroStatic image="/images/events.jpg" title="Events & Performances" />
      <SubNavAngebote />

      <main className="px-6 py-16 max-w-3xl mx-auto text-gray-300 space-y-10">
        <section>
          <h2 className="text-3xl font-serif mb-4 text-white">Didgeridoo en vivo: presencia, vibración, alma</h2>
          <p className="text-lg leading-relaxed">
            El didgeridoo no solo se escucha, se siente. Su vibración transforma el espacio, detiene el tiempo y genera una atmósfera envolvente que toca algo profundo en cada persona presente.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Ya sea en un escenario, en un bosque, o en una sala íntima, adapto mi presencia y sonido al propósito del evento: desde lo ritual hasta lo celebratorio, desde lo terapéutico hasta lo artístico.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Eventos donde el didgeridoo brilla</h3>
          <ul className="list-disc list-inside text-lg text-gray-400 space-y-2">
            <li>Festivales de música o sanación</li>
            <li>Bodas conscientes y ceremonias</li>
            <li>Círculos de sanación y medicina integrativa</li>
            <li>Eventos de nutrición, salud digestiva o bienestar holístico</li>
            <li>Ecstatic dance & yoga inmersivo</li>
            <li>Teatro, performances sensoriales y arte vivencial</li>
            <li>Intervenciones espontáneas en espacios públicos</li>
            <li>Colaboraciones musicales en vivo (electrónica, orgánica, tribal)</li>
          </ul>
        </section>

        <CallToAction text="Proponer una colaboración" />

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Formatos versátiles</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Trabajo tanto en solitario como en colaboración con otros artistas, terapeutas o facilitadores. 
            Ofrezco presentaciones breves o conciertos extensos, intervenciones sonoras, aperturas o cierres de eventos, instalaciones sonoras continuas o sets para danza extática.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Cada actuación es viva, espontánea y canalizada en el momento. El sonido del didgeridoo se une a loops, percusiones, respiración, silencios y presencia.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Un viaje multisensorial</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            El público no solo escucha: se conecta, respira, vibra. Es una experiencia que mueve lo interno y lo colectivo. Ideal para eventos que quieren dejar huella, crear silencio, y activar algo diferente en la memoria del cuerpo.
          </p>
        </section>

        <CallToAction text="Traer esta experiencia a mi evento" />

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">¿Estás organizando algo especial?</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Escríbeme con tu propuesta. Estoy abierto a co-crear, a improvisar, y a llevar esta medicina sonora a nuevos espacios. Lo importante es la intención.
          </p>
        </section>

        <CallToAction text="Agendar una conversación" />
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
