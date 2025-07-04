'use client'
import React from 'react'
import Image from 'next/image'

const Discount = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Up to 50% Discount <br /> for Popular Items
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mb-6 max-w-md mx-auto lg:mx-0">
            If you checkout today, enjoy exclusive offers on our most loved fragrances. 
            This is a limited-time opportunity to own luxury at a fraction of the price.
          </p>
          <button className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative">
          {/* Decorative Circle Background */}
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-r from-[#ce7591] to-[#6A9C89] hover:from-pink-600 hover:to-teal-600 rounded-full z-0 opacity-30 blur-2xl"></div>
          
          {/* Main Image */}
          <div className="relative w-full h-80 lg:h-[400px] z-10">
            <Image
              src="/images/discountimg.jpg" // Replace with your actual image path
              alt="Discount Perfume"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount
