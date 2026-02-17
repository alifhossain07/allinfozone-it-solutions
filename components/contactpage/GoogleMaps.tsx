export default function GoogleMaps() {
  return (
    <section className="bg-white py-20">
      <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row h-[500px] md:h-[500px]">
        {/* Left: Office Info (1/3) */}
        <div className="w-full md:w-1/3 bg-gray-950 text-white p-8 flex flex-col justify-start space-y-6">
       

          {/* Office */}
          <div className="flex items-start space-x-4">
            <span className="text-gray-400 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13 21l-4.657-4.343a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-gray-300 font-semibold uppercase text-sm mb-1">Office</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
              House 53, Road 8, Nabinagar Project, Mohammadpur Housing Ltd Mohammadpur. Dhaka, 1207
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <span className="text-gray-400 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.396 4.187a1 1 0 01-.217 1.054l-2.13 2.13a11.042 11.042 0 005.516 5.516l2.13-2.13a1 1 0 011.054-.217l4.187 1.396a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.163 21 3 16.837 3 12V5z"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-gray-300 font-semibold uppercase text-sm mb-1">Phone</h3>
              <p className="text-gray-400 text-sm">01804655971</p>
            </div>
          </div>

          {/* Email */}
          {/* <div className="flex items-start space-x-4">
            <span className="text-gray-400 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12h.01M12 12h.01M8 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-gray-300 font-semibold uppercase text-sm mb-1">Email</h3>
              <p className="text-gray-400 text-sm">service@digitalagency.com</p>
            </div>
          </div> */}

          {/* Hours */}
          <div className="flex items-start space-x-4">
            <span className="text-gray-400 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-gray-300 font-semibold uppercase text-sm mb-1">Open Hours</h3>
              <p className="text-gray-400 text-sm">
                Mon — Sat: 8 am — 5 pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right: Google Map (2/3) */}
        <div className="w-full md:w-2/3 h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.8254462606176!2d90.34481033877101!3d23.759825549539066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf00070c3bb9%3A0x972007915d4e07a8!2sAllinfozone%20IT%20Solutions!5e0!3m2!1sen!2sbd!4v1768504093858!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
