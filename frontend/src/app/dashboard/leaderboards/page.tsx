import { Button } from '@/components/ui/button'

export default function Leaderboards() {
  const sports = ['Cricket', 'Basketball', 'Tennis', 'Swimming']
  const topRunners = [
    { rank: 1, name: 'Rohit S', distance: '150 km' },
    { rank: 2, name: 'Virat K', distance: '145 km' },
    { rank: 3, name: 'MS Dhone', distance: '140 km' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboards</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Select a Sport</h2>
        <div className="flex space-x-2 mb-6">
          {sports.map((sport) => (
            <Button key={sport} variant="outline">
              {sport}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Top Runners This Month</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topRunners.map((runner) => (
                <tr key={runner.rank}>
                  <td className="px-6 py-4 whitespace-nowrap">{runner.rank}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{runner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{runner.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <Button>View Full Leaderboard</Button>
        </div>
      </div>
    </div>
  )
}

