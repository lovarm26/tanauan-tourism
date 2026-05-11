'use client'

const places = [
  'Tanauan Beach',
  'Historic Church',
  'Coastal Paradise'
]

export default function Destinations() {
  return (
    <section id="spots" className="py-32 px-8">
      <h2 className="text-5xl font-bold text-center mb-16 gradient bg-clip-text text-transparent">
        Tourist Spots
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {places.map((place, index) => (
          <div
            key={index}
            className="glass rounded-3xl p-10 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold">{place}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
