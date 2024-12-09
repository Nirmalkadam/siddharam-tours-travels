import Image from 'next/image'
import { Users, Fuel } from 'lucide-react'

const cars = [
  { 
    name: 'Suzuki Swift', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swift.png-QoaTkEH4vKGFsOfaaUwez4aQM689d7.jpeg', 
    seats: 4, 
    fuelType: 'Petrol / Diesel'
  },
  { 
    name: 'Chevrolet Tavera', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tavera-7EvATNCuUwGEKb2DlRbD2wAZ4MHBv6.png', 
    seats: 9, 
    fuelType: 'Diesel'
  },
  { 
    name: 'Suzuki Ertiga', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ertiga-1xGQueWlvGbZdlbpHP1dswLLthtFvu.png', 
    seats: 7, 
    fuelType: 'Diesel'
  },
]

export function FeaturedCars() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  layout="fill" 
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-1" />
                    <span>{car.seats} seats</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 mr-1" />
                    <span>{car.fuelType}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

