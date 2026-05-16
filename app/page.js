'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  // DARK MODE EFFECT
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode])

  const touristSpots = [
    {
      name: 'Sta. Cruz Beach',
      description:
        'A relaxing coastal destination known for its scenic shoreline, calm waves, and beautiful sunrise views.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/hidden-resort.png',
    },
    {
      name: 'Tanauan Baywalk',
      description:
        'A peaceful place to enjoy the sea breeze, local street food, and stunning sunset scenery.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/baywalk.png?w=1672&h=941',
    },
    {
      name: 'Bantay Dagat Skim Spot',
      description:
        'A natural cave attraction offering adventure, exploration, and rich local stories from the past.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/bantay-dagat.png',
    },
  ]

  const resorts = [
    {
      name: 'Haiyan Peak Resort',
      type: 'Luxury Stay',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/payag.png',
      link: 'https://www.facebook.com/haiyanhotelresort/',
    },
    {
      name: 'Payag ni Lolo Iri',
      type: 'Family Resort',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/payagnilolo.png',
      link: 'https://www.facebook.com/payagniloloiri',
    },
    {
      name: 'Playa Alegre',
      type: 'Beach & Pool Experience',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/playa.png',
      link: 'https://www.facebook.com/PlayaAlegreLeyte',
    },
  ]

  const festivals = [
    {
      name: 'Flores de Mayo Celebration',
      month: 'May',
      description:
        'A colorful and faith-filled celebration honoring the Patron Saints and the Blessed Virgin Mary through the traditional Flores de Mayo festivities.',
    },
    {
      name: 'Fiesta Celebration of Tanauan',
      month: 'July-August',
      description:
        'A lively town fiesta featuring parades, local delicacies, community gatherings, and religious activities.',
    },
    {
      name: 'Christmas Festival',
      month: 'December',
      description:
        'The municipality comes alive with festive lights, performances, and family-centered holiday traditions.',
    },
  ]

  const products = [
    {
      name: 'Traditional Pottery',
      category: 'Clay Craftsmanship',
      description:
        'Handmade clay pots, jars, and decorative pottery crafted by local artisans.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/claypot.png',
    },
    {
      name: 'Bamboo Crafts',
      category: 'Native Handicrafts',
      description:
        'Locally woven bamboo baskets and decorative crafts.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/salaset.png',
    },
    {
      name: 'Dried Fish Products',
      category: 'Seafood Delicacies',
      description:
        'Fresh and flavorful dried fish products prepared traditionally.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/dried.png',
    },
  ]

  return (
    <main className="relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-sky-200 via-cyan-100 to-orange-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">

      {/* GLOBAL DARK MODE TEXT GLOW */}
<style jsx global>{`
  .dark h1,
  .dark h2,
  .dark h3,
  .dark h4,
  .dark h5,
  .dark h6 {
    color: white;
    text-shadow:
      0 0 3px rgba(255,255,255,0.35),
      0 0 8px rgba(56,189,248,0.25);
  }

  .dark p,
  .dark span,
  .dark a,
  .dark li,
  .dark button {
    color: rgba(255,255,255,0.92);
    text-shadow:
      0 0 2px rgba(255,255,255,0.18);
  }

  .dark .glass-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    box-shadow:
      0 0 10px rgba(56,189,248,0.08),
      0 0 20px rgba(59,130,246,0.06);
  }

  .dark .gradient-title {
    text-shadow:
      0 0 4px rgba(255,255,255,0.35),
      0 0 10px rgba(56,189,248,0.25);
  }
`}</style>
     {/* DARK MODE BUTTON */}
<button
  onClick={() => setDarkMode(!darkMode)}
  className="fixed top-4 right-4 z-[999] flex items-center gap-2 px-3 py-1.5 text-xs rounded-full font-semibold backdrop-blur-xl border transition-all duration-300 hover:scale-105"
  style={{
    backgroundColor: darkMode ? '#ffffff' : '#000000',
    borderColor: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
    boxShadow: darkMode
      ? '0 0 15px rgba(255,255,255,0.25)'
      : '0 0 15px rgba(0,0,0,0.25)',
  }}
>
  {/* ICON (animated switch feel) */}
  <span
    className="transition-all duration-300"
    style={{
      transform: darkMode ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)',
    }}
  >
    {darkMode ? '☀️' : '🌙'}
  </span>

  {/* TEXT (always readable) */}
  <span
    className="transition-all duration-300"
    style={{
      color: darkMode ? '#000000' : '#ffffff',
    }}
  >
    {darkMode ? 'Light' : 'Dark'}
  </span>
</button>

      {/* BLURRED LOGO BACKGROUND */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">

        <img
          src="/tanauan_logo.jpg"
          alt="Tanauan Logo Background"
          className="w-[900px] md:w-[1200px] opacity-[0.08] blur-md animate-pulse"
        />

        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* FLOATING BLOBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/30 dark:bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />

      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-orange-300/30 dark:bg-purple-500/20 rounded-full blur-[140px] animate-pulse" />

      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-pink-300/20 dark:bg-blue-500/20 rounded-full blur-[150px] animate-pulse" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden z-10">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/tanauan.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-cyan-500/20 to-orange-200/40 dark:from-black/90 dark:via-slate-900/80 dark:to-slate-950/90" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sky-900 dark:text-cyan-300 font-bold mb-4 text-sm">
              Welcome to Eastern Visayas
            </p>

            <h1 className="gradient-title text-5xl md:text-7xl font-black leading-tight mb-6 drop-shadow-[0_10px_30px_rgba(255,255,255,0.4)]">
              Discover
              <span className="block bg-gradient-to-r from-sky-900 via-cyan-600 to-orange-500 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Tanauan Leyte
              </span>
            </h1>

            <p className="text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed max-w-xl mb-8">
              Explore breathtaking beaches, rich cultural history, scenic landscapes,
              local festivals, and relaxing resorts in Tanauan, Leyte.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-semibold shadow-[0_15px_40px_rgba(14,165,233,0.45)] dark:shadow-[0_0_30px_rgba(56,189,248,0.7)]">
                Explore Tourist Spots
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/40 bg-white/20 dark:bg-white/10 backdrop-blur-lg hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 font-semibold">
                View Resorts
              </button>
            </div>
          </div>

{/* HERO IMAGE / VIDEO */}
          <div className="relative">
            <div className="bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-[2rem] p-4 shadow-2xl overflow-hidden">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[420px] object-cover rounded-[1.5rem] hover:scale-[1.02] transition-all duration-700"
              >
                <source
                  src="https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/Assumptionss.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[2rem]" />

<div className="absolute bottom-10 left-10 text-white z-10 overflow-hidden">

 <motion.div
  className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white z-10 text-center w-full px-4"
  animate={{
    opacity: [0.7, 1, 0.7],
    y: [0, -4, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <h2
    className="font-serif font-semibold text-sm md:text-xl lg:text-2xl drop-shadow-2xl whitespace-nowrap"
    style={{
      letterSpacing: "0.18em",
      textShadow: "0 0 18px rgba(255,255,255,0.25)",
    }}
  >
    OUR LADY OF ASSUMPTION
  </h2>
</motion.div>

</div>

            </div>
          </div>

        </div>
      </section>
{/* STATS */}
<section className="px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { label: 'Tourist Spots', value: '15+' },
              { label: 'Beach Resorts', value: '10+' },
              { label: 'Annual Festivals', value: '5+' },
              { label: 'Local Visitors', value: '50K+' },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:scale-105 hover:-translate-y-3 transition-all duration-500 shadow-2xl"
              >
                <h3 className="text-5xl font-black text-sky-900 mb-3">
                  {item.value}
                </h3>

                <p className="text-slate-700 font-semibold text-lg">
                  {item.label}
                </p>
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* TOURIST SPOTS */}
      <section className="px-6 py-20 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sky-900 uppercase tracking-[0.3em] mb-3 text-sm font-bold">
              Destinations
            </p>

            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-sky-900 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
              Tourist Spots
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {touristSpots.map((spot, index) => (

              <div
                key={index}
                className="group bg-white/30 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/30 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-700"
              >

                <div className="overflow-hidden h-64">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {spot.name}
                  </h3>

                  <p className="text-slate-700 leading-relaxed">
                    {spot.description}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* RESORTS */}
      <section className="px-6 py-20 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">

            <div>
              <p className="text-sky-900 uppercase tracking-[0.3em] mb-3 text-sm font-bold">
                Relax & Stay
              </p>

              <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-sky-900 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Available Resorts
              </h2>
            </div>

          </div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {resorts.map((resort, index) => (

    <div
      key={index}
      className="relative rounded-[2rem] overflow-hidden group h-[420px] hover:-translate-y-4 transition-all duration-700 shadow-2xl"
    >

      <img
        src={resort.image}
        alt={resort.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-8 z-10 text-white w-full">

        <p className="text-yellow-300 mb-2 font-semibold tracking-wide">
          {resort.type}
        </p>

        <h3 className="text-3xl font-black mb-4">
          {resort.name}
        </h3>

        {/* BOOK NOW BUTTON */}
        <a
          href={resort.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 font-semibold shadow-xl"
        >
          Book Now!
        </a>

      </div>

    </div>

  ))}

</div>
 </div>
</section>

      {/* PRODUCTS */}
      <section className="px-6 py-24 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-sky-900 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
              Local Products
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product, index) => (

              <div
                key={index}
                className="group bg-white/30 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/30 hover:-translate-y-4 transition-all duration-700 shadow-2xl"
              >

                <div className="overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-6">
                  <p className="text-cyan-700 font-semibold mb-2">
                    {product.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-3">
                    {product.name}
                  </h3>

                  <p className="text-slate-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

     {/* HISTORY */}
      <section className="px-6 py-24 relative z-10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sky-900 uppercase tracking-[0.3em] mb-4 text-sm font-bold">
            Historical Background
          </p>

          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-sky-900 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
            History of Tanauan Leyte
          </h2>

          <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[2rem] p-10 text-left leading-relaxed text-slate-700 text-lg space-y-6 shadow-2xl">

            <p>
              Tanauan is a municipality located in the province of Leyte in the
              Eastern Visayas region of the Philippines. The town has a rich
              history shaped by trade, fishing, agriculture, and strong cultural
              traditions.
            </p>

            <p>
              During the Spanish colonial period, Tanauan became an important
              settlement and community hub in Leyte. Over the years, the town
              developed through local commerce and the resilience of its people.
            </p>

            <p>
              Tanauan also played a significant role during World War II as Leyte
              became one of the important locations during the liberation of the
              Philippines. Today, the municipality continues to grow while
              preserving its heritage, festivals, and natural attractions.
            </p>

          </div>
        </div>
      </section>

      {/* FESTIVALS */}
      <section className="px-6 py-24 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-sky-900 uppercase tracking-[0.3em] mb-4 text-sm font-bold">
              Celebrations
            </p>

            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-sky-900 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
              Festivals of Tanauan Leyte
            </h2>

            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              Discover the vibrant culture and traditions celebrated throughout
              the year in Tanauan Leyte.
            </p>

          </div>

          <div className="space-y-8">

            {festivals.map((festival, index) => (

              <div
                key={index}
                className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[2rem] p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-2xl"
              >

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                  <div>
                    <h3 className="text-3xl font-bold mb-3">
                      {festival.name}
                    </h3>

                    <p className="text-slate-700 leading-relaxed text-lg max-w-3xl">
                      {festival.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-600 font-bold text-sm uppercase tracking-widest mb-2">
                      Celebration Month
                    </p>

                    <h4 className="text-4xl font-black text-sky-900">
                      {festival.month}
                    </h4>
                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-white/20 bg-gradient-to-r from-sky-900 via-cyan-700 to-orange-500 relative z-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-black text-white">
              Tanauan Leyte Tourism
            </h3>

            <p className="text-white/80 font-medium mt-2">
              Scenic destinations, rich culture, and unforgettable experiences.
            </p>
          </div>

          <div className="flex gap-6 text-white/90">

            <a href="#home" className="hover:text-yellow-300 font-semibold transition-all">
              Home
            </a>

            <a href="#tourist-spots" className="hover:text-yellow-300 font-semibold transition-all">
              Tourist Spots
            </a>

            <a href="#resorts" className="hover:text-yellow-300 font-semibold transition-all">
              Resorts
            </a>

            <a href="#festivals" className="hover:text-yellow-300 font-semibold transition-all">
              Festivals
            </a>

          </div>
        </div>
      </footer>

    </main>
  )
}
