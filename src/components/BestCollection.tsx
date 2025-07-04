import React from 'react';

const BestCollection = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 tracking-wide animate-fade-in">
          Our New Collection
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
          Explore the latest fragrances from Redolence Arabia, crafted with exotic notes and timeless elegance to captivate your senses.
        </p>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* White Wood */}
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white">
            <img
              src="/images/img1.jpg" // Replace with actual image path
              alt="Redolence Arabia White Wood"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              White Wood
            </div>
          </div>

          {/* Musk-ul-Jism */}
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white">
            <img
              src="/images/img2.jpg" // Replace with actual image path
              alt="Redolence Arabia Musk-ul-Jism"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              Musk-ul-Jism
            </div>
          </div>

          {/* Amber Oasis */}
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white">
            <img
              src="/images/img3.jpg" // Replace with actual image path
              alt="Redolence Arabia Amber Oasis"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              Amber Oasis
            </div>
          </div>

          {/* Saffron Bloom */}
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white">
            <img
              src="/images/img4.jpg" // Replace with actual image path
              alt="Redolence Arabia Saffron Bloom"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              Saffron Bloom
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestCollection;