export default function Experience() {
  const experiences = [
    {
      title: 'Freelance Web Projects',
      date: '2023 — Present',
      description: 'Designed and implemented small websites and landing pages for friends and local initiatives, focusing on fast delivery and clean layouts.',
      side: 'right',
      color: 'bg-cyan-400'
    },
    {
      title: 'Personal Learning & Open Source',
      status: 'Ongoing',
      description: 'Regularly ship small experiments, contribute fixes to open-source projects, and document what I learn.',
      side: 'left',
      color: 'bg-purple-400'
    },
    {
      title: 'Education',
      status: 'Computer Science',
      description: 'Studying core CS concepts and modern web development via courses, documentation, and hands-on projects.',
      side: 'right',
      color: 'bg-blue-400'
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">Experience & Highlights</h2>
          <p className="text-gray-400 text-lg">
            Learning by building and collaborating.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-800 hidden md:block"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index}
                className={`relative flex items-center ${
                  exp.side === 'left'
                    ? 'md:flex-row-reverse md:text-right'
                    : 'md:flex-row'
                }`} >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className={`absolute inset-0 rounded-full ${exp.color}`}></div>
                </div>
                <div className={`md:w-1/2 ${exp.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      {exp.date && (
                        <span className="text-xs text-cyan-400 font-medium whitespace-nowrap ml-4">
                          {exp.date}
                        </span>
                      )}
                      {exp.status && (
                        <span className="text-xs text-purple-400 font-medium whitespace-nowrap ml-4">
                          {exp.status}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
