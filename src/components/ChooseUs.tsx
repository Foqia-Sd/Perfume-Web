'use client'
import React from 'react'
import Image from 'next/image'

const ChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative">
          {/* Decorative Circle Behind */}
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-r from-[#ce7591] to-[#6A9C89] hover:from-pink-600 hover:to-teal-600 rounded-full z-0"></div>
          
          {/* Main Image */}
          <div className="relative w-full h-80 lg:h-[400px] z-10">
            <Image
              src="/images/img5.jpg" // Update as per your image name
              alt="Why Choose Us"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
          Our exclusive collection blends timeless ingredients with modern artistry to create scents that 
          truly define you. With exceptional quality, fast delivery, and a passion for perfection, we promise 
          an experience as unforgettable as our perfumes.
          </p>
          <ul className="space-y-3 text-gray-700 text-base lg:text-lg max-w-md mx-auto lg:mx-0">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-[#6A9C89] mr-2">✔</span> Unique Variants
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-[#6A9C89] mr-2">✔</span> Fast Delivery
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-[#6A9C89] mr-2">✔</span> Excellent Service
            </li>
          </ul>
        </div>
      </div>

      
    </section>
  )
}

export default ChooseUs
