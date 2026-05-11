import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Destinations from '@/components/Destinations'
import Resorts from '@/components/Resorts'
import Festival from '@/components/Festival'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Resorts />
      <Festival />
      <Gallery />
      <Footer />
    </main>
  )
}
