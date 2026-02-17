import Image from 'next/image';

export default function Clients() {
  const clients = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      name: 'Netflix',
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      name: 'Microsoft',
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      name: 'Apple',
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      name: 'Google',
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      name: 'Amazon',
    },
  ];

  return (
    <section className="bg-black py-16 md:py-20 overflow-x-hidden">
      <div className="w-10/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        {/* Left: Marquee Logos */}
        <div className="md:w-1/2 overflow-x-hidden overflow-y-visible">
          <div className="flex animate-marquee gap-6 md:gap-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-20 flex items-center justify-center bg-white rounded-lg p-3 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={128}
                  height={80}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
            {/* Duplicate logos for seamless scroll */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-20 flex items-center justify-center bg-white rounded-lg p-3 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={128}
                  height={80}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Heading & Tagline */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-right mt-8 md:mt-0 space-y-4">
          <h2 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Our Clients
          </h2>
          <p className="font-text text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-md md:max-w-full mx-auto md:mx-0">
            Trusted by leading brands across industries, we deliver solutions that drive results and
            build long-term partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
