import { Button } from '@/components/ui/button'

export default function EventDiscovery() {
  const discoveredEvents = [
    { id: 1, name: 'City-wide Soccer Tournament', date: '2025-01-05', location: 'Municipal Stadium' },
    { id: 2, name: 'Beginner\'s Rock Climbing Workshop', date: '2025-01-12', location: 'Adventure Gym' },
    { id: 3, name: 'Community Bike Ride', date: '2025-01-19', location: 'City Bike Trails' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Event Discovery</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recommended Events</h2>
        <div className="space-y-4">
          {discoveredEvents.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Location: {event.location}</p>
              <div className="mt-4 space-x-2">
                <Button variant="outline">View Details</Button>
                <Button>Register</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Discover More Events</h2>
        <Button>Browse All Events</Button>
      </div>
    </div>
  )
}

