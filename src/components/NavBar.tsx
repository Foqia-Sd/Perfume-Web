'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';
import { Menu } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 fixed w-full top-0 z-50 transition-all duration-300">
      {/* Brand and Navigation Together */}
      <div className="flex items-center gap-x-8">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ce7591] to-[#6A9C89] text-2xl lg:text-3xl font-extrabold italic font-serif tracking-wider animate-pulse-slow hover:animate-none transition-all duration-300">
          REDOLENCE ARABIA
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-[#ce7591] transition-colors duration-200 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ce7591] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#home" className="hover:text-[#ce7591] transition-colors duration-200 relative group">
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ce7591] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-[#ce7591] transition-colors duration-200 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ce7591] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-[#ce7591] transition-colors duration-200 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ce7591] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>

      {/* Mobile Menu Trigger (Right Side) */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open Menu">
            <Menu size={24} className="text-[#ce7591] hover:text-pink-600 transition-colors duration-200" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-white/95 backdrop-blur-md text-gray-800 w-[300px]">
            <SheetTitle>
              <span className="sr-only">Navigation Menu</span>
            </SheetTitle>
            <nav className="flex flex-col space-y-6 mt-12 px-4">
              <a href="#" className="text-lg hover:text-[#ce7591] transition-colors duration-200 py-2 border-b border-gray-200 hover:border-[#ce7591]">
                Home
              </a>
              <a href="#home" className="text-lg hover:text-[#ce7591] transition-colors duration-200 py-2 border-b border-gray-200 hover:border-[#ce7591]">
                Shop
              </a>
              <a href="#about" className="text-lg hover:text-[#ce7591] transition-colors duration-200 py-2 border-b border-gray-200 hover:border-[#ce7591]">
                About
              </a>
              <a href="#contact" className="text-lg hover:text-[#ce7591] transition-colors duration-200 py-2 border-b border-gray-200 hover:border-[#ce7591]">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;