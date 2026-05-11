export default function Resorts() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto glass rounded-3xl p-12">
        <h2 className="text-5xl font-bold mb-10 gradient bg-clip-text text-transparent">
          Resorts & Staycation
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              Haiyan Peak Resort
            </h3>
            <p>Modern seaside accommodation with scenic views.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              Playa Alegre
            </h3>
            <p>A tropical getaway destination with relaxing vibes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
