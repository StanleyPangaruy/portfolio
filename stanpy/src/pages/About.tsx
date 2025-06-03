import { MapPin, Code, Cpu, Zap} from 'lucide-react';
// About Page: src/pages/About.tsx
function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                As a Computer Engineering student, I'm fascinated by the intersection of software and hardware. 
                My passion lies in creating innovative solutions that push the boundaries of what's possible 
                in the digital realm.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">My Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To bridge the gap between complex technical concepts and user-friendly applications, 
                making technology more accessible and impactful for everyone.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
              <Code size={48} className="mx-auto mb-4 text-purple-400" />
              <h4 className="text-xl font-bold mb-2">Software</h4>
              <p className="text-gray-400 text-sm">Full-stack development, algorithms, and system design</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300">
              <Cpu size={48} className="mx-auto mb-4 text-blue-400" />
              <h4 className="text-xl font-bold mb-2">Hardware</h4>
              <p className="text-gray-400 text-sm">Embedded systems, microcontrollers, and circuit design</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300">
              <Zap size={48} className="mx-auto mb-4 text-green-400" />
              <h4 className="text-xl font-bold mb-2">Innovation</h4>
              <p className="text-gray-400 text-sm">IoT solutions, automation, and emerging technologies</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300">
              <MapPin size={48} className="mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-bold mb-2">Location</h4>
              <p className="text-gray-400 text-sm">Philippines, open to global opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;