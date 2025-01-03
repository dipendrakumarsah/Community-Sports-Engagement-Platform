import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form>
            <div className="mb-4">
              <Input type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Your Message" rows={4} />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

