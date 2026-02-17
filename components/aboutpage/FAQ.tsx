'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FAQ() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const faqLeft = {
    title: 'Frequently Asked Questions',
    description:
      'Answers to the most common questions our clients ask about our services, process, and approach.',
  };

  const faqRight = [
    {
      question: 'How do you approach a new digital project?',
      answer:
        'We start with a detailed discovery session to understand your brand, audience, and objectives. Then we create a tailored strategy combining design, technology, and marketing.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'We offer full-service digital solutions including web design & development, mobile app development, branding, social media marketing, SEO, and digital strategy consulting.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on scope and complexity. Simple websites can be completed in 4-6 weeks, while larger projects may take 3-6 months.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer:
        'Yes! We offer maintenance and support packages to ensure your digital assets remain secure, updated, and optimized.',
    },
    {
      question: 'How do you price your services?',
      answer:
        'Pricing is based on project scope, complexity, and deliverables. We provide clear proposals upfront with no hidden costs.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div
          data-aos="fade-right"
          className="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl font-title font-bold text-gray-900">{faqLeft.title}</h2>
          <p className="text-gray-600 font-text text-lg leading-relaxed">{faqLeft.description}</p>
        </div>

        {/* Right Column */}
        <div data-aos="fade-left" className="md:w-1/2 flex flex-col space-y-4">
          {faqRight.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-gray-950 hover:bg-gray-800 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-200">{item.question}</span>
                {activeIndex !== index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
              </button>

              {/* Smooth sliding content */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 bg-white text-gray-700 font-text ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="py-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
