
import { Code, ExternalLink} from 'lucide-react';

function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Coconut Fruit Maturity and Tree Disease Detection",
              description: "AI-powered system for detecting coconut fruit maturity and tree diseases using image processing.",
              tech: ["Python", "Raspberry Pi", "React", "YOLOv8"],
              gradient: "from-purple-500 to-pink-500",
              link: "https://cocomat.vercel.app/"
            },
            {
              title: "Temperature and Humidity Monitoring System",
              description: "IoT-based system for real-time temperature and humidity monitoring with data visualization using DHT11 and ESP32.",
              tech: ["PHP", "ESP32", "C++", "MySQL"],
              gradient: "from-blue-500 to-cyan-500",
              link: "https://github.com/StanleyPangaruy/dht11-esp32"
            },
            {
              title: "Valorant Lootbox Simulator",
              description: "A fun simulator for opening Valorant lootboxes, featuring a sleek UI and random item generation.",
              tech: ["Python", "TypeScript", "CSS", "JavaScript", "HTML"],
              gradient: "from-green-500 to-emerald-500",
              link: "https://valorant-lootbox.vercel.app/"
            },
            {
              title: "2025 NBA Finals Prediction",
              description: "Predicting the 2025 NBA Finals winner using machine learning and historical data analysis.",
              tech: ["Python", "Streamlit", "scikit-learn", "Pandas", "NumPy"],
              gradient: "from-indigo-500 to-sky-500",
              link: "https://okcvsind2025.streamlit.app/"
            },
            {
              title: "LeBron James Career Statistics Dashboard",
              description: "Interactive dashboard showcasing LeBron James' career statistics with data visualization.",
              tech: ["Python", "Streamlit", "matplotlib", "Pandas", "SeaBorn"],
              gradient: "from-yellow-500 to-orange-500",
              link: "https://whatthehellebron.streamlit.app/"
            },
            {
              title: "SK Gomez CMS",
              description: "Content management system for managing SK Gomez's digital content and assets.",
              tech: ["Python", "FastAPI", "SQLite", "TypeScript", "Tailwind CSS"],
              gradient: "from-red-500 to-pink-500",
              link: "https://skgomez.vercel.app/"
            },
            {
              title: "ASEAN DIWA Data Visualization",
              description: "Data visualization platform for ASEAN DIWA, showcasing key metrics and insights.",
              tech: ["Python","Streamlit", "Pandas", "Plotly", "NumPy"],
              gradient: "from-blue-500 to-pink-500",
              link: "https://asean-diwa.vercel.app/"
            },
            {
              title: "Datasette Uploader",
              description: "A tool for uploading and managing datasets using Datasette, enabling easy data exploration.",
              tech: ["Python","Streanlit", "Pandas", "Datasette", "SQLite"],
              gradient: "from-blue-500 to-pink-500",
              link: "https://datasette-uploader.vercel.app/"
            },
            {
              title: "Data Parser and Importer",
              description: "A utility for parsing and importing various data formats into a unified database structure.",
              tech: ["Python","Streanlit", "Pandas", "Datasette", "SQLite"],
              gradient: "from-blue-500 to-pink-500",
              link: "https://github.com/StanleyPangaruy/data-importer-clone"
            },
          ].map((project, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <Code size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors group-hover:translate-x-2 duration-300">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;