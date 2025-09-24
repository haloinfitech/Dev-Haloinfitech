"use client";

import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'EduPlatform - Learning Management System',
      category: 'Web Application',
      description: 'Platform pembelajaran online lengkap dengan sistem quiz, assignment, dan progress tracking.',
      image: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'ShopMart Mobile App',
      category: 'Mobile Application',
      description: 'Aplikasi e-commerce mobile dengan fitur payment gateway dan real-time notification.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React Native', 'Firebase', 'Stripe API', 'Redux'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'RestaurantPOS - Point of Sale',
      category: 'Desktop Application',
      description: 'Sistem POS untuk restoran dengan manajemen menu, order, dan laporan penjualan.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Electron', 'Vue.js', 'SQLite', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'SmartCity Dashboard',
      category: 'Data Visualization',
      description: 'Dashboard monitoring dan analisis data kota pintar dengan visualisasi interaktif.',
      image: 'https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'HealthTracker IoT',
      category: 'IoT Application',
      description: 'Sistem monitoring kesehatan dengan integrasi sensor IoT dan machine learning.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Arduino', 'Python', 'TensorFlow', 'MQTT'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'CryptoTrader Bot',
      category: 'Trading Bot',
      description: 'Bot trading otomatis untuk cryptocurrency dengan algoritma machine learning.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'Pandas', 'Binance API', 'ML'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-blue-600">Terbaru</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beberapa project terbaru yang telah kami kerjakan dengan berbagai teknologi dan industri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span>Lihat Semua Portfolio</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}