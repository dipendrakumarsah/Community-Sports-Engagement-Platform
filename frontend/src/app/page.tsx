import Hero from '@/components/landing/Hero'
import About from '@/components/landing/About'
import Features from '@/components/landing/Features'
import HowItWorks from '@/components/landing/HowItWorks'
import Testimonials from '@/components/landing/Testimonials'
import UpcomingEvents from '@/components/landing/UpcomingEvents'
import AppDownload from '@/components/landing/AppDownload'
import Contact from '@/components/landing/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <UpcomingEvents />
      <AppDownload />
      <Contact />
    </main>
  )
}

