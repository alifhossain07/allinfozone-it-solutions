'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function MissionVision() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section>
      {/* First Div: Mission */}
      <div className="bg-black text-white">
        <div className="w-11/12 md:w-full mx-auto flex flex-col md:flex-row min-h-[400px] md:min-h-[350px]">
          {/* Left: Text */}
          <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-12 py-8 md:py-0 space-y-6 text-center md:text-left z-10 relative">
            <div data-aos="fade-right" className="w-full md:w-8/12 mx-auto">
              <h2 className="font-title text-2xl md:text-3xl tracking-wider font-bold">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-text mt-4 leading-relaxed">
                Our mission is to empower businesses through innovative digital solutions. We combine
                creativity, strategy, and technology to deliver impactful experiences.
              </p>
            </div>
          </div>

          {/* Right: Full-height Image */}
          <div className="md:w-1/2 relative h-64 md:h-auto mt-6 md:mt-0">
            <Image
              src="/images/about3.webp"
              alt="Our Mission"
              fill
              className="object-cover rounded-lg md:rounded-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Second Div: Vision */}
      <div className="bg-white text-gray-900">
        <div className="w-11/12 md:w-full mx-auto flex flex-col md:flex-row min-h-[400px] md:min-h-[350px]">
          {/* Left: Full-height Image */}
          <div className="md:w-1/2 relative h-64 md:h-auto order-1 md:order-1 mb-6 md:mb-0">
            <Image
              src="/images/about2.webp"
              alt="Our Vision"
              fill
              className="object-cover rounded-lg md:rounded-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-12 py-8 md:py-0 space-y-6 text-center md:text-right order-2 md:order-2 z-10 relative">
            <div data-aos="fade-left" className="w-full md:w-10/12 mx-auto md:mx-0">
              <h2 className="font-title text-2xl md:text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-700 font-text text-lg md:text-xl leading-relaxed mt-4">
                Our vision is to be a leading digital agency known for creating meaningful and
                innovative solutions. We aim to help brands connect with their audience and thrive
                in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
