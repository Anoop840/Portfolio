import { Code, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-sm font-medium tracking-wider mb-6">
              PERSONAL PORTFOLIO
            </p>

            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              Anoop Agrawal
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-8">
              Software Develoer & Full Stack Developer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              I design and build clean, reliable web experiences, from idea to
              deployment. I care about readable code, thoughtful UX, and shipping
              work that actually makes a difference.
            </p>

            <div className="flex flex-wrap gap-4 mb-12"><a href="#projects">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                View My Projects
              </button></a>
              <button className="px-8 py-4 border border-gray-600 rounded-full font-medium hover:border-gray-400 transition-all flex items-center gap-2">
                Download Resume
                <span>→</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
              <span>Open to internships</span>
              <span>•</span>
              <span>Remote or on-site</span>
              <span>•</span>
              <span>Available for freelance</span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden shadow-2xl">
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-purple-400">const</span>
                  <span className="text-cyan-400"> developer</span>
                  <span className="text-white"> = {'{'}</span>
                </div>

                <div className="pl-6 space-y-2">
                  <div>
                    <span className="text-gray-400">name: </span>
                    <span className="text-green-400">'Anoop Agrawal'</span>
                    <span className="text-white">,</span>
                  </div>

                  <div>
                    <span className="text-gray-400">role: </span>
                    <span className="text-green-400">'Full Stack Dev'</span>
                    <span className="text-white">,</span>
                  </div>

                  <div>
                    <span className="text-gray-400">skills: [</span>
                    <span className="text-green-400">'React'</span>
                    <span className="text-white">, </span>
                    <span className="text-green-400">'Node'</span>
                    <span className="text-white">, </span>
                    <span className="text-green-400">'TS'</span>
                    <span className="text-gray-400">]</span>
                  </div>
                </div>

                <div className="mt-4 mb-6">
                  <span className="text-white">{'}'}</span>
                </div>

                <div className="mt-6">
                  <span className="text-purple-400">await</span>
                  <span className="text-cyan-400"> developer</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-400">build</span>
                  <span className="text-cyan-400">AwesomeThings</span>
                  <span className="text-white">();</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
