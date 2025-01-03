import { Button } from '@/components/ui/button'

export default function Volunteer() {
  const upcomingOpportunities = [
    { id: 1, name: 'Youth Soccer Coach', date: '2025-01-05', location: 'Community Park', spotsLeft: 3 },
    { id: 2, name: 'Marathon Water Station', date: '2025-01-10', location: 'City Center', spotsLeft: 10 },
  ]

  const pastVolunteering = [
    { id: 3, name: 'Little League Umpire', date: '2025-01-20', hours: 4 },
    { id: 4, name: 'Charity Run Organizer', date: '2025-01-15', hours: 6 },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Volunteer Opportunities</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Opportunities</h2>
        <div className="space-y-4">
          {upcomingOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{opportunity.name}</h3>
              <p className="text-gray-600">Date: {opportunity.date}</p>
              <p className="text-gray-600">Location: {opportunity.location}</p>
              <p className="text-gray-600">Spots Left: {opportunity.spotsLeft}</p>
              <div className="mt-4">
                <Button>Sign Up</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Past Volunteering</h2>
        <div className="space-y-4">
          {pastVolunteering.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Hours Contributed: {event.hours}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button>Find More Opportunities</Button>
      </div>
    </div>
  )
}

