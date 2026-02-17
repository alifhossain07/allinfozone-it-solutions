'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="w-9/12 mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        {/* Image Collage */}
        <div data-aos="fade-right" className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="flex space-x-4">
            {/* Left single centered image */}
            <div className="flex items-center">
              <Image
                src="/images/about2.webp"
                alt="About Image 1"
                width={384}
                height={384}
                className="rounded-xl shadow-lg w-40 md:w-96 md:h-auto h-96 object-cover"
              />
            </div>

            {/* Right two stacked images */}
            <div className="flex flex-col space-y-4">
              <Image
                src="/images/about1.webp"
                alt="About Image 2"
                width={240}
                height={288}
                className="rounded-xl shadow-lg w-40 md:w-60 h-64 md:h-72 object-cover"
              />
              <Image
                src="/images/about3.webp"
                alt="About Image 3"
                width={240}
                height={240}
                className="rounded-xl shadow-lg w-40 md:w-60 h-60 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div data-aos="fade-left" className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="font-bold font-text text-md text-[#12c6df] tracking-widest uppercase">About Us</p>
          <h2 className="font-title text-2xl md:w-8/12 md:text-4xl font-bold text-gray-900">
            We Are More Than Just a Digital Agency
          </h2>
          <p className="font-text text-gray-700 text-lg leading-relaxed">
            We are a creative digital agency dedicated to helping brands stand out. Our team
            specializes in web design, development, and marketing strategies that drive results.
          </p>
          <p className="font-text text-gray-700 text-lg leading-relaxed">
            Our mission is to deliver innovative solutions tailored to our clients goals, combining
            creativity, technology, and strategy for maximum impact.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#12c6df] text-white px-4 md:px-6 py-2 md:py-3 rounded-md text-sm font-semibold font-text hover:bg-gray-700 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
