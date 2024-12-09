import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PhoneIcon, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 mr-2 text-blue-600" />
                <span>+91 9834806273</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                <span>siddharamtourstravel@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                <span>Siddharam Tours & Travels,Yashoda Nagar, Satara, Maharashta, India</span>
              </div>
            </div>
          </div>
          {/* <div>
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
            </form>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

