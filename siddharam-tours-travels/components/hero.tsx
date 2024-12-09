
import { PhoneIcon as WhatsApp, Mail } from 'lucide-react'

export function Hero() {
  

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the World with Our Car Rentals</h1>
        <p className="text-xl mb-8">Comfortable, reliable, and affordable car rentals for your next adventure</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={`https://wa.me/919834806273`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
          >
            <WhatsApp className="mr-2 h-5 w-5" />
            Contact on WhatsApp
          </a>
          <a
            href="mailto:siddharamtourstravel@gmail.com"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact via Email
          </a>
        </div>
      </div>
    </section>
  )
}

