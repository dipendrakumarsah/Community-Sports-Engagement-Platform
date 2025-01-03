'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function Header() {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')

  const dashboardLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/events', label: 'Events' },
    { href: '/dashboard/teams', label: 'Teams' },
    { href: '/dashboard/event-discovery', label: 'Discover' },
    { href: '/dashboard/challenges', label: 'Challenges' },
    { href: '/dashboard/leaderboards', label: 'Leaderboards' },
    { href: '/dashboard/training', label: 'Training' },
    { href: '/dashboard/forums', label: 'Forums' },
    { href: '/dashboard/achievements', label: 'Achievements' },
    { href: '/dashboard/equipment', label: 'Equipment' },
    { href: '/dashboard/volunteer', label: 'Volunteer' },
    { href: '/dashboard/profile', label: 'Profile' },
  ]

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/contact', label: 'Contact' },
  ]

  const links = isDashboard ? dashboardLinks : mainLinks

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SportsCommunity
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-blue-600 ${
                    pathname === link.href ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {!isDashboard && (
          <div className="space-x-2">
            <Button asChild variant="outline">
              <Link href="/auth/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

