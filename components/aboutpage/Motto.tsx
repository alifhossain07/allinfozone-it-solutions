'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Motto() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative h-[400px] md:h-[400px] flex items-center justify-center bg-cover bg-center bg-scroll md:bg-fixed overflow-x-hidden"
      style={{ backgroundImage: "url('/images/commitment-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Motto / Tagline */}
      <div data-aos="fade-down" className="relative z-10 w-9/12 mx-auto text-center px-4">
        <h2 className="text-white text-2xl md:text-4xl tracking-wide font-title font-semibold leading-snug">
          Our commitment is to deliver exceptional digital experiences that elevate your brand,
          drive results, and exceed expectations.
        </h2>
      </div>
    </section>
  );
}
