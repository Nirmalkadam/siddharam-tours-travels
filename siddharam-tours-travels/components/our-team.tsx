import Image from 'next/image'
import { Phone } from 'lucide-react'

const owners = [
  {
    name: "BALKRISHNA SONAWANE",
    role: "Owner",
    image: "https://raw.githubusercontent.com/Nirmalkadam/siddharam-tours-travels/refs/heads/main/siddharam-tours-travels/app/img/slazzer-edit-image__1_-removebg-preview.png",
    description: "With over 15 years of experience in the travel industry, BALKRISHNA SONAWANE our team with passion and innovation.",
    phone: "+91 9765504197"
  },
  {
    name: "AKASH SONAWANE",
    role: "COO-Owner",
    image: "https://raw.githubusercontent.com/Nirmalkadam/siddharam-tours-travels/refs/heads/main/siddharam-tours-travels/app/img/IMG_20241210_100203-removebg-preview.png", 
    description: "With over 4 years of experience in the travel industry, AKASH SONAWANE our team with passion and innovation.",
    phone: "+91 9356325142"
  },
  {
    name: "AMIT SONAWANE",
    role: "COO-Owner",
    image: "https://raw.githubusercontent.com/Nirmalkadam/siddharam-tours-travels/refs/heads/main/siddharam-tours-travels/app/img/Amit-removebg-preview.png", 
    description: "With over 1 year of experience in the travel industry, AMIT SONAWANE our team with passion and innovation.",
    phone: "+91 9834806273"
  }
]

export function OurTeam() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Founder of Siddharam Tours and Travel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {owners.map((owner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src={owner.image} 
                alt={owner.name} 
                width={300} 
                height={300} 
                className="w-full h-73 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{owner.name}</h3>
                <p className="text-blue-600 mb-4">{owner.role}</p>
                <p className="text-gray-600 mb-4">{owner.description}</p>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href={`tel:${owner.phone}`} className="hover:text-blue-600 transition-colors">
                    {owner.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

