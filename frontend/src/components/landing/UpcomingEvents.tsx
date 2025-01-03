import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    title: "Community Basketball Tournament",
    date: "2025-01-15",
    location: "Central Park Courts",
    image: "/game1.avif",
  },
  {
    title: "5K Fun Run for Charity",
    date: "2025-01-22",
    location: "Riverside Park",
    image: "/game2.avif",
  },
  {
    title: "Yoga in the Park",
    date: "2025-01-29",
    location: "Sunset Park",
    image: "/game3.avif",
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
               src={event.image} alt={event.title} 
               className="w-full h-48 object-cover" 
               width={300} height={200}
               />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="flex items-center text-gray-600 mb-2">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {event.date}
                </p>
                <p className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </p>
                <Button className="w-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

