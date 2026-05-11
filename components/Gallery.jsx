export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-8">
      <h2 className="text-5xl font-bold text-center mb-16 gradient bg-clip-text text-transparent">
        Gallery
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[1,2,3,4].map((item) => (
          <div
            key={item}
            className="glass rounded-3xl h-80 flex items-center justify-center hover:scale-105 transition duration-300"
          >
            <p className="text-xl">Image Placeholder {item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
