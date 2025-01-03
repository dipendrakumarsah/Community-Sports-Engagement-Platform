import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Join the Community, Play the Game!
        </h1>
        <p className="text-xl mb-8">
          Connect with local sports enthusiasts and participate in exciting events.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
          <Button variant="outline" className='bg-white text-blue-600'>
            <Link href="/events">View Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

