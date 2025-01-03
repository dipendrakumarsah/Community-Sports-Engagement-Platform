import { Button } from '@/components/ui/button'

export default function Teams() {
  const myTeams = [
    { id: 1, name: 'Thunderbolts Basketball', sport: 'Basketball', members: 12 },
    { id: 2, name: 'Swift Runners', sport: 'Running', members: 20 },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Teams</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Teams</h2>
        <div className="space-y-4">
          {myTeams.map((team) => (
            <div key={team.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{team.name}</h3>
              <p className="text-gray-600">Sport: {team.sport}</p>
              <p className="text-gray-600">Members: {team.members}</p>
              <div className="mt-4 space-x-2">
                <Button variant="outline">View Team</Button>
                <Button variant="outline">Manage Members</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Create or Join a Team</h2>
        <div className="space-x-2">
          <Button>Create New Team</Button>
          <Button variant="outline">Find Teams to Join</Button>
        </div>
      </div>
    </div>
  )
}

