import { Shield, Clock, MapPin, PhoneCall } from 'lucide-react'

const services = [
  { icon: Shield, title: 'Insurance Coverage', description: 'Comprehensive insurance for peace of mind' },
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer support' },
  { icon: MapPin, title: 'Flexible Pick-up', description: 'Multiple convenient pick-up locations' },
  { icon: PhoneCall, title: 'Easy Booking', description: 'Simple Email or phone booking process' },
]

export function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <service.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

