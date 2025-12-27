export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'text-cyan-400',
      skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      color: 'text-purple-400',
      skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL']
    },
    {
      category: 'Workflow & Tools',
      color: 'text-pink-400',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Linux']
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl font-bold mb-6">Skills & Tools</h2>
            <p className="text-gray-400 text-lg mb-4">
              What I'm comfortable working with today.
            </p>
            <p className="text-gray-500 leading-relaxed">
              I focus on building web applications with modern,
              well-supported technologies and clean,
              maintainable code.
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-8 border border-gray-800"
              >
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${category.color}`}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
