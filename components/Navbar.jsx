'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold gradient bg-clip-text text-transparent">
        Tanauan Leyte
      </h1>

      <div className="flex gap-6 text-sm md:text-base">
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#spots" className="hover:text-cyan-400 transition">Spots</a>
        <a href="#gallery" className="hover:text-cyan-400 transition">Gallery</a>
      </div>
    </nav>
  )
}
