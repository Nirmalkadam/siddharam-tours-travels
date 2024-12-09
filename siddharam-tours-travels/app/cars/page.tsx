import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FeaturedCars } from '@/components/featured-cars'

export default function CarsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="text-4xl font-bold text-center my-8">Our Car Fleet</h1>
        <FeaturedCars />
      </main>
      <Footer />
    </div>
  )
}

