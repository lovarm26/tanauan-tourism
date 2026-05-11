'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-bg h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          Discover
          <span className="gradient bg-clip-text text-transparent"> Tanauan</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-8">
          The Skimboarding Capital of the Philippines.
        </p>

        <button className="gradient px-8 py-4 rounded-full font-bold hover:scale-110 transition duration-300 shadow-2xl">
          Explore Now
        </button>
      </motion.div>
    </section>
  )
}
