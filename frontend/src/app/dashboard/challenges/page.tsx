import { Button } from '@/components/ui/button'

export default function Challenges() {
  const activeChallenges = [
    { id: 1, name: '30-Day Running Challenge', progress: 60, endDate: '2025-01-15' },
    { id: 2, name: 'Weekly Push-up Challenge', progress: 40, endDate: '2025-01-31' },
  ]

  const availableChallenges = [
    { id: 3, name: 'Summer Cycling Series', duration: '3 months', difficulty: 'Intermediate' },
    { id: 4, name: 'Yoga for Beginners', duration: '4 weeks', difficulty: 'Beginner' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Challenges</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Active Challenges</h2>
        <div className="space-y-4">
          {activeChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{challenge.name}</h3>
              <p className="text-gray-600">Progress: {challenge.progress}%</p>
              <p className="text-gray-600">End Date: {challenge.endDate}</p>
              <div className="mt-4">
                <Button variant="outline">Update Progress</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Challenges</h2>
        <div className="space-y-4">
          {availableChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{challenge.name}</h3>
              <p className="text-gray-600">Duration: {challenge.duration}</p>
              <p className="text-gray-600">Difficulty: {challenge.difficulty}</p>
              <div className="mt-4">
                <Button>Join Challenge</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

