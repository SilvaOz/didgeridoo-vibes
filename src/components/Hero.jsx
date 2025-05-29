import { motion } from 'framer-motion'
import Scene from '../scenes/Scene'

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center bg-white">
            {/* <div className="absolute inset-0 z-0">
                <Scene />
            </div> */}

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="text-5xl md:text-7xl font-serif tracking-widest mb-4">Didgeridoo Sound</h2>
                <p className="text-lg md:text-xl text-gray-700">Sonidos ancestrales para el bienestar moderno</p>

            </motion.div>
        </section>
    )
}
