export default function WorkProcess() {
  const processSteps = [
    {
      title: 'Contact Us',
      desc: 'Reach out via our contact form or call us directly to initiate your project.',
      icon: '📞',
    },
    {
      title: 'Share Requirements',
      desc: 'Provide detailed requirements so we can understand your needs and goals.',
      icon: '📝',
    },
    {
      title: 'Discuss Budget & Timeline',
      desc: 'We evaluate the scope and propose a plan with cost and delivery timelines.',
      icon: '💰',
    },
    {
      title: 'Start Work',
      desc: 'Our team begins crafting the solution with regular updates and collaboration.',
      icon: '🚀',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-11/12 md:w-9/12 mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-title font-bold text-center mb-20">
          Our Work Process
        </h2>

        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-20 h-11/12 w-1 bg-gray-300"></div>

        <div className="flex flex-col space-y-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative w-full flex flex-col md:flex-row ${
                (index + 1) % 2 === 1 ? 'md:justify-start' : 'md:justify-end'
              } items-center`}
            >
              {/* Step Card */}
              <div className="bg-gray-950 md:w-5/12 p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10">
                <h3 className="text-lg md:text-xl text-white font-semibold mb-1">
                  {step.icon} {step.title}
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>

              {/* Circle on Line */}
              <div className="absolute top-0 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-10 md:w-10 h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center z-20 text-white text-lg md:text-xl shadow">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
