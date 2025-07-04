'use client'
import Image from 'next/image'
import React from 'react'

const testimonials = [
  {
    name: 'Sam Altaman',
    image: '/images/user1.jpg',
    feedback:
      'The scent is simply unforgettable. Redolence Arabia has redefined my fragrance experience. Highly recommended!',
    rating: 5,
    time: '1 week ago',
  },
  {
    name: 'Angelina Katyler',
    image: '/images/user2.jpg',
    feedback:
      'Amazing quality and super fast delivery. The packaging alone feels like a luxury gift!',
    rating: 5,
    time: '2 weeks ago',
  },
  {
    name: 'Jason Calera',
    image: '/images/user3.jpg',
    feedback:
      'My go-to brand for perfumes now. Every scent tells a story, and I absolutely love it.',
    rating: 5,
    time: '1 week ago',
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover why thousands trust Redolence Arabia to deliver elegance and emotion through every bottle.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 relative rounded-full overflow-hidden mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{t.feedback}</p>

                {/* Rating */}
                <div className="flex items-center justify-center text-yellow-500 mb-1">
                  {'★'.repeat(t.rating)}
                </div>
                <span className="text-xs text-gray-400">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
