import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Twitch,
  MessageCircleMore,
} from 'lucide-react';

const SocialLinks = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's turn ideas into reality together.
          </p>
        </div>

        {/* Contact Box */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={20} />,
                  label: 'Email',
                  value: 'stanleypangaruy9@gmail.com',
                  link: 'mailto:stanleypangaruy9@gmail.com',
                  gradient: 'from-pink-500 to-purple-500',
                },
                {
                  icon: <Linkedin size={20} />,
                  label: 'LinkedIn',
                  value: 'Stanley John Pangaruy',
                  link: 'https://linkedin.com/in/stanley-john-pangaruy-17176b287',
                  gradient: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: <Github size={20} />,
                  label: 'GitHub',
                  value: 'stanleypangaruy',
                  link: 'https://github.com/stanleypangaruy',
                  gradient: 'from-gray-700 to-gray-900',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400">{item.label}</p>
                    <p className="text-lg text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {[
                {
                  icon: <MessageCircleMore size={20} />,
                  label: 'Discord',
                  value: '_stanli',
                  link: 'https://discord.com/users/_stanli',
                  gradient: 'from-indigo-500 to-purple-500',
                },
                {
                  icon: <Twitch size={20} />,
                  label: 'Twitch',
                  value: 'tanleys',
                  link: 'https://twitch.tv/tanleys',
                  gradient: 'from-purple-500 to-indigo-500',
                },
                {
                  icon: <Facebook size={20} />,
                  label: 'Facebook',
                  value: 'fb.com/pystanley',
                  link: 'https://facebook.com/pystanley',
                  gradient: 'from-blue-600 to-blue-800',
                },
                // {
                //   icon: <Twitter size={20} />,
                //   label: 'Twitter',
                //   value: '@stanleydop3',
                //   link: 'https://twitter.com/stanleydop3',
                //   gradient: 'from-sky-400 to-blue-500',
                // },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400">{item.label}</p>
                    <p className="text-lg text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
