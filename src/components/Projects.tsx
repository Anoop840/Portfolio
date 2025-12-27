import { Terminal, Code2, Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Code2,
      title: 'DevNotes',
      description: 'A personal knowledge base to organize code snippets and notes with full-text search.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL'],
      link: '#',
      // highlight: true
    },
    {
      icon: Terminal,
      title: 'AG Gems',
      description: 'A full-stack e-commerce application built with MongoDB, Express.js, React (Next.js), and Node.js.',
      tags: ['React','MongoDB','Node','Express','Razorpay','TaiwindCss'],
      link: 'https://github.com/Anoop840/AG-Gems',
      highlight: true
    },
    {
      icon: Globe,
      title: 'Portfolio v1',
      description: 'My first portfolio experiment focused on performance and accessible, semantic HTML.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Selected Projects</h2>
          <p className="text-gray-400 text-lg">
            A few things I've built and explored recently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-lg p-8 border ${
                project.highlight
                  ? 'border-blue-500/50 hover:border-blue-400'
                  : 'border-gray-800 hover:border-gray-600'
              } transition-all group`}
            >
              <div className="mb-6">
                <project.icon
                  className={`w-8 h-8 ${
                    project.highlight ? 'text-blue-400' : 'text-purple-400'
                  }`}
                />
              </div>

              <h3 className={`text-2xl font-bold mb-3 ${
                project.highlight ? 'text-blue-400' : 'text-white'
              }`}>
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      project.highlight
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className={`inline-flex items-center gap-2 font-medium ${
                  project.highlight ? 'text-blue-400' : 'text-white'
                } group-hover:gap-3 transition-all`}
              >
                View project
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
