import { Button } from '@/components/ui/button'
import { Trophy } from 'lucide-react'

export default function Achievements() {
  const recentAchievements = [
    { id: 1, name: 'Marathon Finisher', description: 'Completed your first marathon', date: '2025-01-15' },
    { id: 2, name: 'Team Captain', description: 'Led your team to victory in the local league', date: '2025-01-01' },
  ]

  const upcomingAchievements = [
    { id: 3, name: '100 Days Streak', description: 'Log your workouts for 100 consecutive days', progress: 85 },
    { id: 4, name: 'Mountain Climber', description: 'Participate in 5 hiking events', progress: 60 },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
        <div className="space-y-4">
          {recentAchievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <Trophy className="text-yellow-500 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{achievement.name}</h3>
                <p className="text-gray-600">{achievement.description}</p>
                <p className="text-gray-600">Achieved on: {achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Achievements</h2>
        <div className="space-y-4">
          {upcomingAchievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{achievement.name}</h3>
              <p className="text-gray-600">{achievement.description}</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${achievement.progress}%` }}></div>
              </div>
              <p className="text-gray-600 mt-2">Progress: {achievement.progress}%</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Button>View All Achievements</Button>
      </div>
    </div>
  )
}

