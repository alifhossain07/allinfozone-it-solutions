'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: 'Alex Carter',
      position: 'CEO, Startup Hub',
      testimony:
        'The team delivered a sleek website that perfectly represents our brand. Their digital strategy truly boosted our visibility.',
      image: 'https://i.pravatar.cc/100?img=10',
    },
    {
      name: 'Mia Roberts',
      position: 'Marketing Manager, TrendyTech',
      testimony:
        'Their UI/UX design transformed our app into a user-friendly platform. We saw engagement increase immediately.',
      image: 'https://i.pravatar.cc/100?img=11',
    },
    {
      name: 'Liam Hughes',
      position: 'Founder, Creative Co.',
      testimony:
        'We were impressed by the branding work. The digital presence they built for us is consistent and modern.',
      image: 'https://i.pravatar.cc/100?img=12',
    },
    {
      name: 'Olivia Bennett',
      position: 'Product Lead, Innovate Labs',
      testimony:
        'Their marketing campaigns helped us reach the right audience. Results exceeded our expectations in every metric.',
      image: 'https://i.pravatar.cc/100?img=13',
    },
  ];

  return (
    <section className="w-full bg-sky-950 mx-auto py-20 overflow-x-hidden">
      <div data-aos="fade-down" className="text-center">
        <h1 className="font-text tracking-widest text-sm md:text-xl font-bold mb-3 md:mb-6 uppercase text-gray-400">
          Success Stories
        </h1>
        <h1 className="font-title tracking-wide text-xl md:text-4xl font-bold md:w-6/12 mx-auto leading-snug text-gray-100">
          Driving Client Success Through Innovative Digital Solutions
        </h1>
      </div>

      {/* Marquee Container */}
      <div className="overflow-x-hidden overflow-y-visible relative mt-20 w-10/12 mx-auto">
        <div className="flex animate-marquee space-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-96">
              <div className="bg-gray-950 border border-gray-700 shadow-lg rounded-lg p-8 h-80 flex flex-col justify-between">
                <div className="flex flex-col flex-grow items-center text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full w-20 h-20 mb-4 shadow-md border border-gray-700"
                  />
                  <p className="text-gray-300 mb-4 flex-grow">{testimonial.testimony}</p>
                </div>
                <div>
                  <h3 className="font-title font-bold text-lg text-gray-100">
                    {testimonial.name}
                  </h3>
                  <span className="text-gray-400">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate slides for seamless marquee */}
          {testimonials.map((testimonial, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 w-96">
              <div className="bg-gray-950 border border-gray-700 shadow-lg rounded-lg p-8 h-80 flex flex-col justify-between">
                <div className="flex flex-col flex-grow items-center text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full w-20 h-20 mb-4 shadow-md border border-gray-700"
                  />
                  <p className="text-gray-300 mb-4 flex-grow">{testimonial.testimony}</p>
                </div>
                <div>
                  <h3 className="font-title font-bold text-lg text-gray-100">
                    {testimonial.name}
                  </h3>
                  <span className="text-gray-400">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
