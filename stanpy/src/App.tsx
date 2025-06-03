import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Cpu, Zap, Menu, X, Facebook, Twitch, MessageCircleMore } from 'lucide-react';

import SocialLinks from './pages/SocialLinks.tsx';
import Projects from './pages/Projects.tsx';
import About from './pages/About.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${Math.sin(Date.now() * 0.005) * 0.2 + 1})`
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              STANPY
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SP
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
            STANPY
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-300">
            Stanley John O. Pangaruy
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Cpu className="text-purple-400" size={20} />
              <span>Computer Engineering</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Code className="text-blue-400" size={20} />
              <span>Software Developer</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Zap className="text-yellow-400" size={20} />
              <span>Electronics Enthusiast</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about bridging the gap between software innovation and hardware excellence. 
            Creating digital experiences that matter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="https://github.com/stanleypangaruy"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/stanley-john-pangaruy-17176b287/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="group-hover:rotate-12 transition-transform text-white" />
            </a>

            <a
              href="mailto:stanleypangaruy9@gmail.com"
              className="group bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform text-white" />
            </a>

            <a
              href="https://discord.com/users/_stanli"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-indigo-500 to-violet-500 p-4 rounded-full hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.791 19.791 0 0015.58 3a13.843 13.843 0 00-.63 1.29 18.956 18.956 0 00-5.9 0A13.843 13.843 0 008.42 3a19.791 19.791 0 00-4.738 1.369C1.587 8.39.95 12.29 1.29 16.11a20.128 20.128 0 005.727 2.891 15.348 15.348 0 001.248-2.024 13.88 13.88 0 01-2.212-1.079c.186-.14.37-.284.552-.432 4.34 2.01 9.045 2.01 13.388 0 .18.148.364.292.55.432a13.88 13.88 0 01-2.211 1.078c.403.715.818 1.412 1.245 2.09a20.128 20.128 0 005.73-2.893c.42-4.32-.678-8.22-3.472-11.74zM9.021 14.178c-1.045 0-1.905-.945-1.905-2.107 0-1.161.838-2.107 1.905-2.107 1.07 0 1.93.946 1.905 2.107 0 1.162-.838 2.107-1.905 2.107zm5.957 0c-1.045 0-1.905-.945-1.905-2.107 0-1.161.838-2.107 1.905-2.107 1.07 0 1.93.946 1.905 2.107 0 1.162-.838 2.107-1.905 2.107z"/>
              </svg>
            </a>

            <a
              href="https://www.twitch.tv/tanleys"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.285 0L.571 4.285v15.43h5.144V24l4.285-4.285h3.43L23.43 12V0H4.285zm17.143 11.143L16 16H12.57l-2.857 2.857v-2.857H5.143V1.714h16.285v9.429zM17.143 4.286h-1.714v5.143h1.714V4.286zm-4.285 0h-1.715v5.143h1.715V4.286z"/>
              </svg>
            </a>

            <a
              href="https://fb.com/pystanley"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-700 to-blue-500 p-4 rounded-full hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82V14.708h-3.49v-3.623h3.49V8.41c0-3.455 2.109-5.338 5.192-5.338 1.475 0 2.741.11 3.112.159v3.61l-2.134.001c-1.672 0-1.996.795-1.996 1.96v2.571h3.99l-.52 3.623h-3.47V24h6.804c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.408 0 22.675 0z"/>
              </svg>
            </a>

            {/* <a
              href="https://twitter.com/stanleydop3"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-sky-500 to-blue-400 p-4 rounded-full hover:from-sky-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.173-1.555-3.594-1.555-2.719 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.124C7.691 8.095 4.067 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.179 1.396 4.768 2.211 7.548 2.211 9.051 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
              </svg>
            </a> */}
          </div>

          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce group"
          >
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <span className="mb-2 group-hover:translate-y-1 transition-transform">Scroll to explore</span>
              <ChevronDown size={24} className="group-hover:translate-y-2 transition-transform" />
            </div>
          </button>
        </div>
      </section>


      <About />

      <Projects />

      <SocialLinks />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              STANPY
            </div>
            <p className="text-gray-400">Stanley John O. Pangaruy</p>
          </div>

          <div className="flex justify-center flex-wrap gap-6 mb-8">
            <a href="https://github.com/stanleypangaruy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/stanley-john-pangaruy-17176b287/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:stanleypangaruy9@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://discord.com/users/_stanli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <MessageCircleMore size={24} />
            </a>
            <a href="https://www.twitch.tv/tanleys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Twitch size={24} />
            </a>
            <a href="https://www.facebook.com/pystanley" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Facebook size={24} />
            </a>
            {/* <a href="https://x.com/stanleydop3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
              <X size={24} />
            </a> */}
            {/* <a href="https://www.reddit.com/user/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Reddit size={24} />
            </a> */}
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 Stanley Pangaruy. Crafted with 💜 and logic gates.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;