export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold mb-8">About Me</h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I'm Anoop Agrawal, a self-driven software developer who enjoys turning ideas into working products. I
                like clean interfaces, simple flows, and code that's easy to come back to.
              </p>

              <p>
                Recently, I've been focusing on modern JavaScript, React, and full-stack web development. I learn
                quickly, ask good questions, and enjoy collaborating with designers and other developers.
              </p>

              <p>
                Right now I'm looking for opportunities where I can keep growing, ship real features, and
                contribute to a team that cares about quality.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">
                  Pune, Maharashtra, India
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Focus</h3>
                <p className="text-gray-400 text-sm">
                  Web development || Blockchain 
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Interests</h3>
                <p className="text-gray-400 text-sm">
                  Developer tools, clean UI, automation
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
              <img 
                src="\photo.jpg" 
                alt="Anoop Agrawal" 
                className="w-full h-full object-cover"
                style={{
                  height:"380px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
