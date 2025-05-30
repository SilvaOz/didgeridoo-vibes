import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroStatic from '../../components/HeroStatic'
import SubNavAngebote from '../../components/SubNavAngebote'
import { Link } from 'react-router-dom'

export default function Healing() {
  return (
    <>
      <Navbar />
      <HeroStatic image="/images/healing.jpg" title="Healing Sessions" />
      <SubNavAngebote />

      <main className="px-6 py-16 max-w-3xl mx-auto text-gray-300 space-y-10">
        <section>
          <h2 className="text-3xl font-serif mb-4 text-white">Sanación sonora con didgeridoo</h2>
          <p className="text-lg leading-relaxed">
            El didgeridoo no es solo un instrumento. Es una extensión del cuerpo, una herramienta ancestral que canaliza vibraciones profundas para desbloquear tensiones físicas, emocionales y energéticas. Sus ondas armónicas penetran suavemente, creando un estado de relajación alterada donde el cuerpo recuerda cómo sanar por sí mismo.
          </p>
        </section>

        <CallToAction text="Quiero experimentar la vibración" />

        <section>
          <h3 className="text-2xl font-semibold mb-2 text-white">¿Cómo es una sesión?</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Durante una sesión, estarás cómodamente recostado mientras el sonido del didgeridoo viaja a través de tu cuerpo. Acompañado de respiración consciente, a veces aceites esenciales, silencio y contención. No tienes que “hacer” nada: solo recibir.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            El sonido trabaja donde más se necesita: desde liberar bloqueos emocionales hasta inducir un descanso profundo o activar la energía vital.
          </p>
        </section>

        <CallToAction text="Reservar mi sesión" />

        <section>
          <h3 className="text-2xl font-semibold mb-2 text-white">¿Para quién es?</h3>
          <ul className="list-disc list-inside text-lg text-gray-400 space-y-2">
            <li>Personas con estrés crónico o ansiedad</li>
            <li>Buscadores espirituales o meditadores</li>
            <li>Artistas o creativos que necesitan claridad</li>
            <li>Personas en procesos de duelo o cambio</li>
            <li>Quienes quieren reconectar con su cuerpo</li>
          </ul>
        </section>

        <CallToAction text="Sí, esto es para mí" />

        <section>
          <h3 className="text-2xl font-semibold mb-2 text-white">Sesiones individuales o grupales</h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            Puedes venir solo(a) o en pareja, o formar parte de un pequeño grupo de sanación. También ofrezco sesiones en retiros, clínicas holísticas o espacios naturales. Cada sesión es adaptada intuitivamente al momento.
          </p>
        </section>

        <CallToAction text="Agendar ahora" />

        <section>
          <h3 className="text-2xl font-semibold mb-2 text-white">Testimonios</h3>
          <p className="italic text-gray-500 mb-2">“Sentí que mi cuerpo flotaba. Una sensación de paz profunda que nunca había experimentado.” – Laura R.</p>
          <p className="italic text-gray-500">“Después de mi sesión, dormí por 10 horas como un bebé. El zumbido del didgeridoo aún lo siento dentro.” – Jonas M.</p>
        </section>

        <CallToAction text="Explorar disponibilidad" />
      </main>

      <Footer />
    </>
  )
}

function CallToAction({ text }) {
  return (
    <div className="text-center my-8">
      <Link
        to="/buchen"
        className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        {text}
      </Link>
    </div>
  )
}
