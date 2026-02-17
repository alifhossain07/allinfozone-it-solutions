'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function OurTeam() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      name: 'Abdullah Al Mamun',
      role: 'Founder & CEO',
      img: 'https://i.ibb.co/PZXp9P7r/mamun.jpg',
      bio: 'Provides strategic leadership, sets the company vision, and drives long-term growth through innovation and decision-making.',
    },
    {
      name: 'Alif Hossain',
      role: 'Founder & CTO',
      img: 'https://i.ibb.co/wNPtP5L1/2.png',
      bio: 'Leads the technical vision, oversees system architecture, and ensures scalable, secure, and high-performing technology solutions.',
    },
    {
      name: 'Umma Honey Adrita',
      role: 'UI/UX Designer',
      img: 'https://i.ibb.co/9kvsXc6B/female-Ava.jpg',
      bio: 'Designs intuitive and visually engaging user experiences, focusing on usability, accessibility, and brand consistency.',
    },
    {
      name: 'Khalid Bin Sayed',
      role: 'Technical Supervisor & WordPress Developer',
      img: 'https://i.ibb.co/yczWdMNj/1735051857422-copy.jpg',
      bio: 'Supervises technical implementation and develops customized WordPress solutions to ensure performance, security, and reliability.',
    },
    
  ];

  return (
    <section className="py-16 px-6 lg:px-24 bg-black">
      <div data-aos="fade-down" className="text-center">
        <h1 className="font-text text-white tracking-widest text-sm md:text-xl font-bold mb-3 md:mb-6 uppercase">
          Our Team
        </h1>
        <h1 className="font-title text-white tracking-wide text-2xl md:text-3xl font-bold md:w-6/12 mx-auto leading-snug">
          Meet the Creative Minds Behind Our Digital Agency
        </h1>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row justify-between mt-10 w-10/12 mx-auto gap-5"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-950 shadow-lg p-8 w-72 border border-gray-800 hover:scale-105 transition-transform duration-300"
          >
            {/* Profile Image */}
            <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-gray-700 hover:border-gray-500 transition-all duration-300">
              <Image
                src={member.img}
                alt={member.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>

            {/* Role */}
            <p className="text-gray-400 font-semibold mb-2">{member.role}</p>

            {/* Bio */}
            <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
