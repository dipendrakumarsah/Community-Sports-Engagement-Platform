import { Button } from '@/components/ui/button'

export default function Training() {
  const recommendedPrograms = [
    { id: 1, name: '5K Training Plan', duration: '8 weeks', difficulty: 'Beginner' },
    { id: 2, name: 'Strength Training for Basketball', duration: '12 weeks', difficulty: 'Intermediate' },
  ]

  const myPrograms = [
    { id: 3, name: 'HIIT Workout Series', progress: 30, nextSession: 'Today, 6:00 PM' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Training Programs</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Active Programs</h2>
        <div className="space-y-4">
          {myPrograms.map((program) => (
            <div key={program.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{program.name}</h3>
              <p className="text-gray-600">Progress: {program.progress}%</p>
              <p className="text-gray-600">Next Session: {program.nextSession}</p>
              <div className="mt-4">
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recommended Programs</h2>
        <div className="space-y-4">
          {recommendedPrograms.map((program) => (
            <div key={program.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{program.name}</h3>
              <p className="text-gray-600">Duration: {program.duration}</p>
              <p className="text-gray-600">Difficulty: {program.difficulty}</p>
              <div className="mt-4">
                <Button>Start Program</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

