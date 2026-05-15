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
        'Is a vibrant street spectacle honoring Our Lady of Assumption and inviting future progress, health, and fortune. The celebration also highlights Tanauan’s traditional livelihoods by proudly showcasing local pottery, banig weaving, farming, and fishing.',
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
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop')",
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

      {/* REST OF YOUR CONTENT HERE */}
      {/* Keep all your existing sections exactly the same */}

    </main>
  )
}
