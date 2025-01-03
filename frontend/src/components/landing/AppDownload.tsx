import { Button } from '@/components/ui/button'
import { AppleIcon, PlayIcon } from 'lucide-react'

export default function AppDownload() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Our Mobile App</h2>
        <p className="text-xl mb-8">
          Stay connected on the go. Download our app for iOS and Android.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="default" className="text-white border-white hover:bg-white hover:text-blue-600">
            <AppleIcon className="w-5 h-5 mr-2" />
            App Store
          </Button>
          <Button variant="destructive" className="text-white border-white hover:bg-white hover:text-blue-600">
            <PlayIcon className="w-5 h-5 mr-2" />
            Google Play
          </Button>
        </div>
      </div>
    </section>
  )
}

