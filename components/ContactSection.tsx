'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative text-white py-20 md:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-2 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage: "url('/images/servicebg.webp')",
          filter: 'blur(4px)',
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative w-10/12 z-10 md:w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side - Info + Newsletter */}
        <div
          data-aos="fade-right"
          className="flex-1 flex flex-col md:w-9/12 justify-center space-y-10"
        >
          {/* Info Section */}
          <div className="space-y-4">
            <h3 className="md:text-4xl text-2xl text-center md:text-left font-extrabold font-rubik text-white leading-snug">
              Lets Build <br />
              <span className="text-gray-200">Your Digital Presence</span>
            </h3>
            <p className="text-white text-center md:text-left font-text text-sm md:text-lg leading-relaxed">
              Ready to launch or elevate your digital brand? Our agency specializes in web design,
              digital marketing, and creative solutions tailored to help your business grow.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-md">
            <h4 className="text-xl font-rubik font-semibold text-gray-200">Stay Updated</h4>
            <p className="text-gray-300 font-rubik text-sm mt-1">
              Get exclusive insights, agency updates, and creative tips straight to your inbox.
            </p>
            <div className="mt-4 flex bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full text-black focus:outline-none bg-white"
              />
              <button className="bg-black text-white px-4 py-2 hover:bg-gray-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          data-aos="fade-left"
          className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Strips */}
          <div className="absolute top-0 right-0 w-full h-2 bg-gray-300"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300"></div>

          <h2 className="text-2xl font-rubik tracking-wider font-bold text-white mb-6">
            Work With Us
          </h2>
          <form action="/contact" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-gray-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-gray-400 outline-none"
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Website"
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-gray-400 outline-none md:col-span-2"
            />

            <select
              name="service"
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-gray-400 outline-none md:col-span-2"
            >
              <option className="text-black" value="">
                Which service are you interested in?
              </option>
              <option className="text-black" value="web-design">
                Web Design
              </option>
              <option className="text-black" value="branding">
                Branding
              </option>
              <option className="text-black" value="digital-marketing">
                Digital Marketing
              </option>
              <option className="text-black" value="other">
                Other
              </option>
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Additional Information"
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-gray-400 outline-none md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-[#12c6df] text-black hover:bg-black transition px-6 py-3 rounded-lg font-semibold hover:text-white shadow-md md:col-span-2"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
