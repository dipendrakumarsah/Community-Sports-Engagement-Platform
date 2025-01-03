import Image from 'next/image'

const testimonials = [
  {
    quote: "This platform has revolutionized how I engage with sports in my community!",
    name: "Sarah Johnson",
    role: "Amateur Athlete",
    avatar: "/image1.avif",
  },
  {
    quote: "I've met so many great people and formed an amazing basketball team.",
    name: "Michael Chen",
    role: "Team Captain",
    avatar: "/image2.avif",
  },
  {
    quote: "The personalized event suggestions are spot-on. I never miss out on fun activities now!",
    name: "Emily Rodriguez",
    role: "Sports Enthusiast",
    avatar: "/image3.avif",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">&apos{testimonial.quote}&apos</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

