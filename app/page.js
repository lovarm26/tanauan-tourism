export default function Home() {
  const touristSpots = [
    {
      name: 'Sta. Cruz Beach',
      description:
        'A relaxing coastal destination known for its scenic shoreline, calm waves, and beautiful sunrise views.',
      image: 'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/hidden-resort.png',
    },
    {
      name: 'Tanauan Baywalk',
      description:
        'A peaceful place to enjoy the sea breeze, local street food, and stunning sunset scenery.',
      image: 'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/baywalk.png?w=1672&h=941',
    },
    {
      name: 'Bantay Dagat Skim Spot',
      description:
        'A natural cave attraction offering adventure, exploration, and rich local stories from the past.',
      image: 'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/bantay-dagat.png',
    },
  ]

  const resorts = [
    {
      name: 'Haiyan Peak Resort',
      type: 'Luxury Stay',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/payag.png',
    },
    {
      name: 'Payag ni Lolo Iri',
      type: 'Family Resort',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/payagnilolo.png',
    },
    {
      name: 'Playa Alegre',
      type: 'Beach & Pool Experience',
      image:
        'https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/playa.png',
    },
  ]

  const festivals = [
    {
      name: 'Pasaka Festival',
      month: 'August 14',
      description:
        'Is a vibrant street spectacle honoring Our Lady of Assumption and inviting future progress, health, and fortune. The celebration also highlights Tanauan’s traditional livelihoods by proudly showcasing local pottery, banig weaving, farming, and fishing..',
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

  return (
    <main className="relative bg-gradient-to-br from-sky-200 via-cyan-100 to-orange-100 text-slate-900 overflow-hidden">

      {/* BLURRED LOGO BACKGROUND */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">

        <img
          src="/tanauan_logo.jpg"
          alt="Tanauan Logo Background"
          className="w-[900px] md:w-[1200px] opacity-[0.08] blur-md animate-pulse"
        />

        {/* EXTRA GLOW */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

      </div>

      {/* FLOATING BLOBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[150px] animate-pulse" />

      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-orange-300/30 rounded-full blur-[140px] animate-pulse" />

      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-pink-300/20 rounded-full blur-[150px] animate-pulse" />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden z-10">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://6a01e0c5e3ddafb3f4a13ff4.imgix.net/tanauan_logo.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-cyan-500/20 to-orange-200/40" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">


          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sky-900 font-bold mb-4 text-sm">
              Welcome to Eastern Visayas
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 drop-shadow-[0_10px_30px_rgba(255,255,255,0.4)]">
              Discover
              <span className="block bg-gradient-to-r from-sky-900 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Tanauan Leyte
              </span>
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-xl mb-8">
              Explore breathtaking beaches, rich cultural history, scenic
              landscapes, local festivals, and relaxing resorts in the beautiful
              municipality of Tanauan, Leyte.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-semibold shadow-[0_15px_40px_rgba(14,165,233,0.45)]">
                Explore Tourist Spots
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/40 bg-white/20 backdrop-blur-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                View Resorts
              </button>
            </div>
          </div>

          {/* UPLOAD PHOTO SLOT */}
          <div className="relative">
            <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[2rem] p-6 shadow-2xl">

              <div className="border-2 border-dashed border-cyan-500/40 rounded-3xl h-[420px] flex flex-col items-center justify-center text-center p-8 hover:border-cyan-500 transition-all duration-500">

                <div className="text-6xl mb-4 animate-bounce">
                  📸
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  Upload Your Scenic Photo
                </h2>

                <p className="text-slate-700 mb-6 max-w-sm">
                  Replace this section with your own tourism image or featured
                  destination photo for Tanauan Leyte.
                </p>

                <label className="cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 transition-all font-medium shadow-xl">
                  Upload Image
                  <input type="file" className="hidden" />
                </label>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DASHBOARD STATS */}
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

            <p className="text-slate-700 max-w-2xl mx-auto text-lg">
              Experience the beauty and hidden gems of Tanauan Leyte through its
              beaches, landmarks, and nature attractions.
            </p>
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

            <p className="text-slate-700 max-w-xl text-lg">
              Enjoy luxurious accommodations, family-friendly resorts, and scenic
              beachfront stays perfect for your Leyte getaway.
            </p>

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

                <div className="absolute bottom-0 p-8 z-10 text-white">
                  <p className="text-yellow-300 mb-2 font-semibold tracking-wide">
                    {resort.type}
                  </p>

                  <h3 className="text-3xl font-black">
                    {resort.name}
                  </h3>
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

            <a href="#" className="hover:text-yellow-300 font-semibold transition-all">
              Home
            </a>

            <a href="#" className="hover:text-yellow-300 font-semibold transition-all">
              Tourist Spots
            </a>

            <a href="#" className="hover:text-yellow-300 font-semibold transition-all">
              Resorts
            </a>

            <a href="#" className="hover:text-yellow-300 font-semibold transition-all">
              Festivals
            </a>

          </div>
        </div>
      </footer>

    </main>
  )
}
