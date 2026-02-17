import Link from 'next/link';

export default function ContactHero() {
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
      <div className="relative w-11/12 md:w-9/12 mx-auto h-[650px] flex flex-col justify-center items-center text-center text-white">
        <h1 className="font-title text-4xl md:text-6xl font-bold mb-4">
          Talk to Our Creative Team Today
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>{' '}
          / Contact
        </p>
      </div>
    </div>
  );
}
