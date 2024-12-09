import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Siddharam Tours & Travels</h3>
            <p className="mb-4">Providing quality car rentals for your travel needs.</p>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a> */}
              <a 
                href="https://www.instagram.com/siddharam_tours_travals?igsh=eTloZ3Y5cDE3MHdp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Car Fleet</a></li>
              <li><a href="#" className="hover:text-blue-400">Booking</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Phone: +91 9834806273</p>
            <p>Email: siddharamtourstravel@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Siddharam Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

