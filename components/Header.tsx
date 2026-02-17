'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="w-10/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              className="h-16 md:h-[85px] w-auto"
              src={isScrolled ? '/images/logo1.png' : '/images/logobase.png'}
              alt="Company Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 font-text">
            <li className="relative group">
              <Link href="/" className="px-2 py-1">
                <span className={`transition-all duration-300 group-hover:opacity-80 ${
                  isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'
                }`}>
                  Home
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/about" className="px-2 py-1">
                <span className={`transition-all duration-300 group-hover:opacity-80 ${
                  isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'
                }`}>
                  About
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/service" className="px-2 py-1">
                <span className={`transition-all duration-300 group-hover:opacity-80 ${
                  isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'
                }`}>
                  Services
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/contact" className="px-2 py-1">
                <span className={`transition-all duration-300 group-hover:opacity-80 ${
                  isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'
                }`}>
                  Contact
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </Link>
            </li>

            {/* Phone / Contact */}
            <li>
              <a
                href="tel:01745305137"
                className={`inline-flex items-center px-4 py-2 border-4 rounded-full bg-transparent transition-colors duration-300 space-x-2 ${
                  isScrolled
                    ? 'border-[#12c6df] text-[#12c6df] font-semibold hover:bg-blue-50 hover:border-blue-700'
                    : 'border-gray-500 text-white hover:bg-gray-800 hover:border-gray-400'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.396 4.187a1 1 0 01-.217 1.054l-2.13 2.13a11.042 11.042 0 005.516 5.516l2.13-2.13a1 1 0 011.054-.217l4.187 1.396a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.163 21 3 16.837 3 12V5z"
                  />
                </svg>
                <span className='tracking-wider'>01804655971</span>
              </a>
            </li>
          </ul>

          {/* Login Button */}
        
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`focus:outline-none transition-colors duration-300 ${
              isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'
            }`}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden transition-colors duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-black/90'
        }`}>
          <ul className={`flex flex-col space-y-4 text-center py-6 font-text ${
            isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'
          }`}>
            <li>
              <Link href="/" className={`transition-colors duration-300 ${
                isScrolled ? 'hover:text-blue-800' : 'hover:text-gray-300'
              }`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`transition-colors duration-300 ${
                isScrolled ? 'hover:text-blue-800' : 'hover:text-gray-300'
              }`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/service" className={`transition-colors duration-300 ${
                isScrolled ? 'hover:text-blue-800' : 'hover:text-gray-300'
              }`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`transition-colors duration-300 ${
                isScrolled ? 'hover:text-blue-800' : 'hover:text-gray-300'
              }`}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="tel:"
                className={`inline-flex items-center px-4 py-2 border-4 rounded-full bg-transparent transition-colors duration-300 space-x-2 ${
                  isScrolled
                    ? 'border-blue-600 text-[#12c6df] font-semibold hover:bg-blue-50 hover:border-blue-700'
                    : 'border-gray-500 text-white hover:bg-gray-800 hover:border-gray-400'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${isScrolled ? 'text-[#12c6df] font-semibold' : 'text-white'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.396 4.187a1 1 0 01-.217 1.054l-2.13 2.13a11.042 11.042 0 005.516 5.516l2.13-2.13a1 1 0 011.054-.217l4.187 1.396a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.163 21 3 16.837 3 12V5z"
                  />
                </svg>
                <span>01804655971</span>
              </a>
            </li>
            <li>
              <Link
                href="/login"
                className={`inline-block border px-5 py-2 rounded-md transition-all duration-300 ${
                  isScrolled
                    ? 'border-blue-600 text-[#12c6df] font-semibold hover:bg-blue-600 hover:text-white'
                    : 'border-gray-500 hover:bg-white hover:text-black'
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
