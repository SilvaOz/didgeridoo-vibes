import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroStatic from '../../components/HeroStatic'
import SubNavAngebote from '../../components/SubNavAngebote'
import { Link } from 'react-router-dom'

export default function Workshops() {
  return (
    <>
      <Navbar />
      <HeroStatic image="/images/workshops.jpg" title="Workshops" />
      <SubNavAngebote />

      <main className="px-6 py-16 max-w-3xl mx-auto text-gray-300 space-y-10">
        <section>
          <h2 className="text-3xl font-serif mb-4 text-white">Aprende a tocar el didgeridoo</h2>
          <p className="text-lg leading-relaxed">
            El didgeridoo no es solo un instrumento. Es una medicina que despierta la respiración, la atención plena y la conexión con tu voz interna. En estos workshops, aprenderás desde cero cómo producir el sonido, mantener el ritmo y entrar en estados meditativos profundos.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">¿Qué puedes esperar?</h3>
          <ul className="list-disc list-inside text-lg text-gray-400 space-y-2">
            <li>Introducción práctica y accesible para todos los niveles</li>
            <li>Técnica de respiración circular</li>
            <li>Conciencia corporal, vibración y enfoque</li>
            <li>Ritmos, pulsos y musicalidad orgánica</li>
            <li>Espacios para improvisación, juego y meditación</li>
          </ul>
        </section>

        <CallToAction text="Quiero empezar a tocar" />

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Formatos disponibles</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            - Talleres presenciales (individuales o grupales)  
            - Experiencias en retiros de bienestar  
            - Sesiones privadas 1:1  
            - Clases para niños, familias o escuelas  
            - Activaciones en empresas (respiración, enfoque y creatividad)
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            También ofrezco workshops temáticos: “Respira tu sonido”, “Silencio activo”, “Exploración tribal”, y otros espacios creativos.
          </p>
        </section>

        <CallToAction text="Agendar un workshop" />

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">¿Y si nunca has tocado un instrumento?</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Perfecto. Aquí no se trata de saber música. Se trata de explorar el cuerpo como canal de sonido. De jugar, respirar, liberar tensiones y entrar en un flujo natural.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            El didgeridoo nos enseña a dejar de controlar y simplemente resonar.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">Lo que dicen quienes ya lo vivieron</h3>
          <blockquote className="border-l-4 border-white pl-4 italic text-gray-400">
            “Pensé que no podría tocar. En 15 minutos estaba vibrando todo mi pecho. Fue una conexión brutal con mi respiración.”  
            <br /> — Clara, participante
          </blockquote>
          <blockquote className="border-l-4 border-white pl-4 italic text-gray-400 mt-4">
            “No es solo música. Es presencia, es juego, es tribu. ¡Quiero repetir!”  
            <br /> — Diego, facilitador de yoga
          </blockquote>
        </section>

        <CallToAction text="Reservar mi plaza" />

        <section>
          <h3 className="text-2xl font-semibold text-white mb-2">¿Listo para vibrar diferente?</h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Escríbeme con tu idea o el formato que más te interesa. También puedo diseñar un workshop a medida para tu grupo, espacio o comunidad.
          </p>
        </section>

        <CallToAction text="Diseñar un taller personalizado" />
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
