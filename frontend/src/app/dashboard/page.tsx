import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const features = [
    { title: 'My Events', description: 'View and manage your upcoming events', link: '/dashboard/events' },
    { title: 'My Teams', description: 'Manage your teams and view team activities', link: '/dashboard/teams' },
    { title: 'Event Discovery', description: 'Find new events in your area', link: '/dashboard/event-discovery' },
    { title: 'Challenges', description: 'Participate in community challenges', link: '/dashboard/challenges' },
    { title: 'Leaderboards', description: 'Check your ranking in various sports', link: '/dashboard/leaderboards' },
    { title: 'Training Programs', description: 'Access personalized training programs', link: '/dashboard/training' },
    { title: 'Community Forums', description: 'Engage in discussions with other members', link: '/dashboard/forums' },
    { title: 'Achievements', description: 'View your sports achievements and badges', link: '/dashboard/achievements' },
    { title: 'Equipment Exchange', description: 'Buy, sell, or trade sports equipment', link: '/dashboard/equipment' },
    { title: 'Volunteer Opportunities', description: 'Find ways to give back to your community', link: '/dashboard/volunteer' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Your Sports Dashboard!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link key={index} href={feature.link} className="block">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Button variant="outline" className="w-full">
                Explore
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

