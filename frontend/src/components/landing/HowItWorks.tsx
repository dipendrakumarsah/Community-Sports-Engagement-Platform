import { UserPlus, Calendar, Users, Trophy } from 'lucide-react'

const steps = [
  { icon: UserPlus, title: 'Sign Up', description: 'Create your account and set your preferences.' },
  { icon: Calendar, title: 'Find Events', description: 'Discover sports events in your community.' },
  { icon: Users, title: 'Join a Team', description: 'Form or join a team for your favorite sports.' },
  { icon: Trophy, title: 'Participate', description: 'Engage in events and have fun with your community.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <step.icon className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

