import { Button } from '@/components/ui/button'

export default function Forums() {
  const popularTopics = [
    { id: 1, title: 'Best pre-workout routines', replies: 45, lastActivity: '2 hours ago' },
    { id: 2, title: 'Nutrition tips for endurance athletes', replies: 32, lastActivity: '1 day ago' },
    { id: 3, title: 'Injury prevention strategies', replies: 28, lastActivity: '3 hours ago' },
  ]

  const categories = ['General Discussion', 'Training Tips', 'Nutrition', 'Equipment Reviews', 'Event Planning']

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Community Forums</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Topics</h2>
        <div className="space-y-4">
          {popularTopics.map((topic) => (
            <div key={topic.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{topic.title}</h3>
              <p className="text-gray-600">Replies: {topic.replies}</p>
              <p className="text-gray-600">Last Activity: {topic.lastActivity}</p>
              <div className="mt-4">
                <Button variant="outline">View Discussion</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Forum Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Button key={category} variant="outline" className="text-left">
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Button>Start New Discussion</Button>
      </div>
    </div>
  )
}

