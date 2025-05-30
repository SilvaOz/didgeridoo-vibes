import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center" style={{ background: 'linear-gradient1800deg, #e9d8a6 0%, #f4e2d8 50%)' }}>
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
