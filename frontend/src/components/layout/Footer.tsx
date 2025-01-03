import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              SportsCommunity is a platform dedicated to bringing sports enthusiasts together and fostering community engagement through athletic activities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="/features" className="text-sm text-gray-600 hover:text-blue-600">Features</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Facebook</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 SportsCommunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

