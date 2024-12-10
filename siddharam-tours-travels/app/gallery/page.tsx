import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

const galleryImages = [
  { src: '/placeholder.svg?height=400&width=600', alt: 'Car on a scenic road' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Group of friends on a road trip' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Family vacation with rental car' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Business traveler with luxury car' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Off-road adventure in SUV' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'City exploration with compact car' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Romantic getaway drive' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Car parked at a beautiful viewpoint' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Happy customers receiving car keys' },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

