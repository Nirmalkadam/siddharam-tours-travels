import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Services } from '@/components/services'

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
        <Services />
      </main>
      <Footer />
    </div>
  )
}

