'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="text-2xl font-bold text-blue-600">
          SportsCommunity
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link 
                href="/dashboard" 
                className={`hover:text-blue-600 ${pathname === '/dashboard' ? 'text-blue-600 font-semibold' : ''}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/events" 
                className={`hover:text-blue-600 ${pathname.startsWith('/dashboard/events') ? 'text-blue-600 font-semibold' : ''}`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/teams" 
                className={`hover:text-blue-600 ${pathname.startsWith('/dashboard/teams') ? 'text-blue-600 font-semibold' : ''}`}
              >
                Teams
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard/profile" 
                className={`hover:text-blue-600 ${pathname === '/dashboard/profile' ? 'text-blue-600 font-semibold' : ''}`}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <Button onClick={() => signOut({ callbackUrl: '/' })}>
          Log Out
        </Button>
      </div>
    </header>
  )
}

