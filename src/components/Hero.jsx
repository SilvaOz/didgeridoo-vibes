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
             <h2 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] tracking-tight">WIRAQOCHA WAVES</h2>
<p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto tracking-widest">DIDGERIDOO – VIBRATIONEN DURCH JAHRTAUSENDE</p>
            </motion.div>
        </section>
    )
}
