import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedCars } from '@/components/featured-cars'
import { OurTeam } from '@/components/our-team'
import { Services } from '@/components/services'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCars />
        <OurTeam />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

