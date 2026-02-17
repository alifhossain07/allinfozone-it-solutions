'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/heroImg.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="relative w-9/12 mx-auto text-white flex flex-col md:flex-row items-center justify-between z-10">
        <div
          data-aos="fade-right"
          className="space-y-10 md:h-screen h-[600px] pt-32 md:pt-64 mt-28 text-center md:text-left max-w-2xl"
        >
          <h1 className="font-title text-3xl md:text-6xl font-bold leading-tight">
            We Build Brands That Stand Out
          </h1>
          <p className="font-text text-gray-200 text-lg md:text-xl">
            A Creative Digital Agency Delivering Design, Development, and Marketing Solutions.
          </p>
          <Link
            href="/service"
            className="inline-block bg-[#12c6df] text-black md:px-6 md:py-3 px-4 py-2 rounded-md text-sm font-semibold font-text hover:bg-gray-200 transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
