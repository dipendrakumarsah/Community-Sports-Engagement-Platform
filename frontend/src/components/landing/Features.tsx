import { CalendarDays, Users, Lightbulb, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: CalendarDays,
    title: 'Event Awareness',
    description: 'Stay updated on all local sports events and activities.',
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Form or join teams for various sports and competitions.',
  },
  {
    icon: Lightbulb,
    title: 'Personalized Suggestions',
    description: 'Get AI-powered recommendations tailored to your interests.',
  },
  {
    icon: MessageCircle,
    title: 'Community Interaction',
    description: 'Connect with fellow sports enthusiasts in your area.',
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

