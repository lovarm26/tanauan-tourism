'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

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
        'A colorful and faith-filled celebration honoring the Patron Saints and the Blessed Virgin Mary.',
    },
    {
      name: 'Fiesta Celebration of Tanauan',
      month: 'July-August',
      description:
        'A lively town fiesta featuring parades, food, and community gatherings.',
    },
    {
      name: 'Christmas Festival',
      month: 'December',
      description:
        'Festive lights, performances, and family traditions throughout the town.',
    },
  ]

  const products = [
    {
      name: 'Traditional Pottery',
      category: 'Clay Craftsmanship',
      description:
        'Handmade clay pots and jars crafted by local artisans.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/claypot.png',
    },
    {
      name: 'Bamboo Crafts',
      category: 'Native Handicrafts',
      description:
        'Locally woven bamboo baskets and crafts.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/salaset.png',
    },
    {
      name: 'Dried Fish Products',
      category: 'Seafood Delicacies',
      description:
        'Fresh and flavorful dried fish products.',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/dried.png',
    },
  ]

  return (
    <main className="relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-sky-200 via-cyan-100 to-orange-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">

      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-[999] px-3 py-1.5 rounded-xl bg-white/20 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-cyan-400/20 shadow-lg text-sm font-medium"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* HERO (FIXED VIDEO BACKGROUND) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 z-10">

        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/Assumptionss.mp4"
              type="video/mp4"
            />
          </video>

          {/* overlays */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-950/80" />

        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-white">

          <div>
            <p className="uppercase tracking-[0.3em] font-bold mb-4 text-sm text-cyan-300">
              Welcome to Eastern Visayas
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                Tanauan Leyte
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Explore beaches, culture, resorts, and festivals in Tanauan, Leyte.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:scale-105 transition">
                Explore Tourist Spots
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-lg">
                View Resorts
              </button>
            </div>
          </div>

          <div className="hidden lg:block text-right">
            <h2 className="text-4xl font-black">
              OUR LADY OF ASSUMPTION
            </h2>
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
