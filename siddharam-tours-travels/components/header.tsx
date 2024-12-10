import Link from 'next/link'
import { Car } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Siddharam Tours & Travels</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link href="/cars" className="text-gray-600 hover:text-blue-600">Cars</Link></li>
            <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link href="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

