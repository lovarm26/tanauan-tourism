export default function Home() {
  const touristSpots = [
    {
      name: 'Tanghas Beach',
      description:
        'A relaxing coastal destination known for its scenic shoreline, calm waves, and beautiful sunrise views.',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Tanauan Baywalk',
      description:
        'A peaceful place to enjoy the sea breeze, local street food, and stunning sunset scenery.',
      image:
        'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Guinabotan Cave',
      description:
        'A natural cave attraction offering adventure, exploration, and rich local stories from the past.',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  const resorts = [
    {
      name: 'Blue Horizon Resort',
      type: 'Beach Resort',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Leyte Paradise Resort',
      type: 'Family Resort',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Sunset Cove Resort',
      type: 'Luxury Stay',
      image:
        'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  const festivals = [
    {
      name: 'Pintados-Kasadyaan Festival',
      month: 'June',
      description:
        'A colorful cultural celebration showcasing traditional dances, music, and vibrant body art inspired by the ancient Pintados warriors.',
    },
    {
      name: 'Fiesta Celebration of Tanauan',
      month: 'September',
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

  return (
    <main className="bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/70 via-orange-500/40 to-pink-600/60" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm">
              Welcome to Eastern Visayas
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Discover
              <span className="block text-cyan-400">Tanauan Leyte</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
              Explore breathtaking beaches, rich cultural history, scenic
              landscapes, local festivals, and relaxing resorts in the beautiful
              municipality of Tanauan, Leyte.
            </p>

           <div className="flex flex-wrap gap-4">
  <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 hover:scale-105 transition-all font-semibold shadow-2xl">
    Explore Tourist Spots
  </button>

  <button className="px-8 py-4 rounded-2xl border border-white/30 bg-white/10 hover:bg-white/20 transition-all">
    View Resorts
  </button>
</div>
          </div>

          {/* Upload Photo Slot */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl">
              <div className="border-2 border-dashed border-cyan-400/40 rounded-3xl h-[420px] flex flex-col items-center justify-center text-center p-8 hover:border-cyan-400 transition-all">
                <div className="text-6xl mb-4">📸</div>
                <h2 className="text-2xl font-bold mb-3">
                  Upload Your Scenic Photo
                </h2>
                <p className="text-gray-300 mb-6 max-w-sm">
                  Replace this section with your own tourism image or featured
                  destination photo for Tanauan Leyte.
                </p>

                <label className="cursor-pointer px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all font-medium">
                  Upload Image
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
<div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-30" />

<div className="absolute top-96 right-10 w-80 h-80 bg-yellow-400 rounded-full blur-[120px] opacity-30" />

<div className="absolute bottom-20 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-20" />

      {/* DASHBOARD STATS */}
      <section className="px-6 py-20">
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
                className="bg-gradient-to-br from-pink-500/30 via-orange-400/20 to-yellow-300/20 border border-white/20 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 hover:rotate-1 transition-all shadow-2xl"
              >
                <h3 className="text-5xl font-black text-cyan-400 mb-3">
                  {item.value}
                </h3>
                <p className="text-gray-300 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURIST SPOTS */}
      <section className="px-6 py-20 bg-gradient-to-r from-pink-600/20 via-orange-400/20 to-yellow-300/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-3 text-sm">
              Destinations
            </p>
            <h2 className="text-5xl font-black mb-6">Tourist Spots</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience the beauty and hidden gems of Tanauan Leyte through its
              beaches, landmarks, and nature attractions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {touristSpots.map((spot, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-pink-500/20 via-orange-400/10 to-yellow-300/20 rounded-[2rem] overflow-hidden border border-white/20 hover:-translate-y-3 hover:rotate-1 transition-all duration-300 shadow-2xl"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{spot.name}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESORTS */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.3em] mb-3 text-sm">
                Relax & Stay
              </p>
              <h2 className="text-5xl font-black mb-4">
                Available Resorts
              </h2>
            </div>

            <p className="text-gray-400 max-w-xl text-lg">
              Enjoy luxurious accommodations, family-friendly resorts, and scenic
              beachfront stays perfect for your Leyte getaway.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resorts.map((resort, index) => (
              <div
                key={index}
                className="relative rounded-[2rem] overflow-hidden group h-[420px]"
              >
                <img
                  src={resort.image}
                  alt={resort.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 p-8 z-10">
                  <p className="text-yellow-300 mb-2 font-semibold tracking-wide">
  {resort.type}
</p>
                  <h3 className="text-3xl font-black">{resort.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="px-6 py-24 bg-gradient-to-br from-fuchsia-700 via-orange-500 to-yellow-400">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Historical Background
          </p>

          <h2 className="text-5xl font-black mb-8">
            History of Tanauan Leyte
          </h2>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 text-left leading-relaxed text-gray-300 text-lg space-y-6">
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
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Celebrations
            </p>
            <h2 className="text-5xl font-black mb-6">
              Festivals of Tanauan Leyte
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the vibrant culture and traditions celebrated throughout
              the year in Tanauan Leyte.
            </p>
          </div>

          <div className="space-y-8">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-pink-500/20 via-orange-400/20 to-yellow-300/20 border border-white/20 rounded-[2rem] p-8 hover:scale-[1.02] transition-all shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-3">
                      {festival.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                      {festival.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-cyan-400 text-sm uppercase tracking-widest mb-2">
                      Celebration Month
                    </p>
                    <h4 className="text-4xl font-black">{festival.month}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-white/20 bg-gradient-to-r from-fuchsia-700 via-pink-600 to-orange-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-cyan-400">
              Tanauan Leyte Tourism
            </h3>
            <p className="text-gray-400 mt-2">
              Scenic destinations, rich culture, and unforgettable experiences.
            </p>
          </div>

          <div className="flex gap-6 text-gray-300">
            <a href="#" className="hover:text-cyan-400 transition-all">
              Home
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              Tourist Spots
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              Resorts
            </a>
            <a href="#" className="hover:text-cyan-400 transition-all">
              Festivals
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
