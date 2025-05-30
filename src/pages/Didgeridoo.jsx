// pages/didgeridoo.jsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroStatic from '../components/HeroStatic'



export default function Didgeridoo() {
  return (
    <>
      <Navbar />

      <HeroStatic
        image="/images/didgeridoo.jpg"
        title="El Camino del Didgeridoo"
      />
      

      <main className="px-6 py-16 max-w-3xl mx-auto text-gray-200">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">
          Un llamado ancestral
        </h2>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          Mi viaje con el **didgeridoo** comenzó hace más de una década. No fue una elección racional, 
          fue una atracción magnética hacia un sonido que sentí en el cuerpo mucho antes que en los oídos.
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          Este instrumento de origen ancestral no solo me enseñó a respirar, sino a estar presente. A percibir 
          los silencios, a habitar el ritmo natural del cuerpo, a observar la vibración como lenguaje. Cada sonido 
          es una conversación con la tierra.
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6">
          Con el tiempo, el didgeridoo se volvió herramienta de sanación, conexión, y arte. Hoy lo comparto no como 
          músico, sino como canal. Como puente. A través de terapias, talleres y danzas, invito a otros a encontrar 
          su propia frecuencia.
        </p>

        <p className="text-md md:text-lg leading-relaxed">
          Esta es mi historia, pero también puede ser la tuya. Porque el sonido es colectivo. Es vibración común. 
          Y si resuena contigo, es porque algo en ti también vibra desde ese lugar.
        </p>
      </main>

      <Footer />
    </>
  )
}
