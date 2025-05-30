import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroStatic from '../../components/HeroStatic'
import { Link } from "react-router-dom";
import SubNavAngebote from '../../components/SubNavAngebote'


export default function Angebote() {
  return (
    <>
      <Navbar />

      <HeroStatic 
        image="/images/hero-angebote.jpg"
        title="Angebote"
      />
      <SubNavAngebote />
      <main className="px-6 py-16 max-w-4xl mx-auto text-gray-200">
        <p className="text-lg mb-8 leading-relaxed">
          Desde sesiones privadas hasta presentaciones en vivo, estos son mis espacios para compartir el poder del didgeridoo.
        </p>

        <div className="space-y-8">
          <SubLink href="/angebote/healing" title="Healing Sessions">
            Sesiones individuales o grupales de sonido terapéutico. Para relajación, respiración y equilibrio energético.
          </SubLink>

          <SubLink href="/angebote/events" title="Events & Performances">
            Música en vivo con didgeridoo para bodas, festivales, y experiencias inmersivas en empresas.
          </SubLink>

          <SubLink href="/angebote/workshops" title="Workshops">
            Aprende a tocar el didgeridoo desde cero. Enfoque holístico y práctico.
          </SubLink>

          <SubLink href="/angebote/preise" title="Preise">
            Consulta los precios de cada servicio. Todos los valores incluyen impuestos (Inkl. MwSt.).
          </SubLink>
        </div>
      </main>

      <Footer />
    </>
  )
}

function SubLink({ href, title, children }) {
  return (
    <div>
      <Link href={href} className="text-2xl font-serif text-white hover:underline">
        {title}
      </Link>
      <p className="text-gray-400 mt-2 text-md max-w-prose">{children}</p>
    </div>
  )
}
