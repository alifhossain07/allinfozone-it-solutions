import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200 py-16">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Column 1: Logo + Tagline */}
        <div className="flex flex-col items-center md:text-left md:items-start space-y-4 md:w-1/4">
          <Link href="/" className="flex space-x-2">
            <Image
              src="/images/logotransparent1.png"
              alt="Logo"
              width={80}
              height={80}
              className="h-28 w-auto"
            />
          </Link>
          <p className="text-gray-400 text-center md:text-left text-sm">
            We build digital experiences that help brands stand out and engage their audience.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className="flex flex-col space-y-2 text-center items-center md:text-right md:items-end md:w-1/4">
          <h4 className="font-semibold uppercase text-gray-300 text-sm">Company</h4>
          <Link href="/about" className="hover:text-white transition-colors duration-300 text-sm">
            About
          </Link>
          <Link href="/service" className="hover:text-white transition-colors duration-300 text-sm">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-white transition-colors duration-300 text-sm">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-300 text-sm">
            Contact
          </Link>
        </div>

        {/* Column 3: Resources Links */}
        <div className="flex flex-col text-center items-center md:text-right md:items-end space-y-2 md:w-1/4">
          <h4 className="font-semibold uppercase text-gray-300 text-sm">Resources</h4>
          <Link href="#" className="hover:text-white transition-colors duration-300 text-sm">
            Blog
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-300 text-sm">
            Help Center
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-300 text-sm">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-300 text-sm">
            Terms of Service
          </Link>
        </div>

        {/* Column 4: Social Icons */}
        <div className="flex flex-col space-y-4 text-center items-center md:text-right md:items-end md:w-1/4">
          <h4 className="font-semibold uppercase text-gray-300 text-sm">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.892h-2.33V21.88C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.34-1.6.57-2.46.68a4.27 4.27 0 0 0 1.88-2.36 8.47 8.47 0 0 1-2.7 1.03 4.22 4.22 0 0 0-7.21 3.85A12 12 0 0 1 3 4.92a4.22 4.22 0 0 0 1.31 5.63 4.19 4.19 0 0 1-1.91-.53v.05a4.22 4.22 0 0 0 3.38 4.14 4.27 4.27 0 0 1-1.9.07 4.22 4.22 0 0 0 3.95 2.93A8.47 8.47 0 0 1 2 19.54a11.94 11.94 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.867-3.064-1.868 0-2.154 1.46-2.154 2.969v5.699h-3v-10h2.881v1.367h.041c.401-.758 1.379-1.557 2.839-1.557 3.036 0 3.598 1.998 3.598 4.594v5.596z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.012-4.947.071-1.618.074-3.062.376-4.18 1.494-1.118 1.118-1.42 2.562-1.494 4.18-.059 1.28-.071 1.69-.071 4.947s.012 3.667.071 4.947c.074 1.618.376 3.062 1.494 4.18 1.118 1.118 2.562 1.42 4.18 1.494 1.28.059 1.69.071 4.947.071s3.667-.012 4.947-.071c1.618-.074 3.062-.376 4.18-1.494 1.118-1.118 1.42-2.562 1.494-4.18.059-1.28.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.074-1.618-.376-3.062-1.494-4.18-1.118-1.118-2.562-1.42-4.18-1.494-1.28-.059-1.69-.071-4.947-.071z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="w-11/12 md:w-10/12 mx-auto mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {currentYear} Allinfozone IT Solutions. Developed by{' '}
        <a href="https://alifhossain.dev" className="hover:text-white">
          Alif Hossain
        </a>
        .
      </div>
    </footer>
  );
}
