'use client';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between">
      {/* Left: Text Content */}
      <div className="flex-1 z-10 px-6 py-12 lg:px-12 lg:py-16 text-center lg:text-left">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight tracking-tight animate-fade-in mt-20">
            Embrace the Scent of Luxury
          </h1>
          <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed animate-fade-in-delay">
            Discover fragrances that speak to your soul — elegant, long-lasting, and unforgettable.
          </p>
          <button className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-delay-2">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 w-full h-[400px] lg:h-screen relative">
        <Image
          src="/images/hero-img.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500"
          priority
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;