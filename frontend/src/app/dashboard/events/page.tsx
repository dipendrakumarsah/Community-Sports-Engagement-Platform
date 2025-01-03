import { Button } from '@/components/ui/button'

export default function Events() {
  const upcomingEvents = [
    { id: 1, name: 'Community Basketball Tournament', date: '2025-01-15', location: 'Central Park Courts' },
    { id: 2, name: '5K Fun Run for Charity', date: '2025-01-22', location: 'Riverside Park' },
    { id: 3, name: 'Yoga in the Park', date: '2025-01-29', location: 'Sunset Park' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Events</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Location: {event.location}</p>
              <div className="mt-4 space-x-2">
                <Button variant="outline">View Details</Button>
                <Button variant="outline">Cancel Registration</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
        <Button>Create Event</Button>
      </div>
    </div>
  )
}

