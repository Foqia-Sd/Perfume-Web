'use client'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Newsletter */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">GET OUR NEWSLETTER</h3>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:flex-1 px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#6A9C89] placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-[#6A9C89] text-white px-6 py-2 rounded-full hover:bg-[#568978] transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm border-t border-gray-700 pt-8">
          <a href="#" className="hover:text-[#ce7591] transition">ABOUT</a>
          <a href="#" className="hover:text-[#ce7591] transition">PRODUCT</a>
          <a href="#" className="hover:text-[#ce7591] transition">CATALOG</a>
          <a href="#" className="hover:text-[#ce7591] transition">FAQ</a>
          <a href="#" className="hover:text-[#ce7591] transition">PRIVACY POLICY</a>
          <a href="#" className="hover:text-[#ce7591] transition">TERMS CONDITION</a>
          <a href="#" className="hover:text-[#ce7591] transition">CONTACT</a>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8 gap-6">
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/theredolencearabia" className="hover:text-[#6A9C89]" target='blank'><FaFacebookF /></a>
            <a href="#" className="hover:text-[#6A9C89]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#6A9C89]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#6A9C89]"><FaLinkedinIn /></a>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-right">
            © 2023 Redolance Arabia - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
