"use client";

import { useState } from 'react';
import { Globe, Smartphone, ShoppingCart, Database, Lightbulb, Headphones } from 'lucide-react';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Landing pages, company profiles, dan website custom sesuai kebutuhan bisnis Anda.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Admin Panel']
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Aplikasi mobile Android dan iOS dengan teknologi terdepan dan user experience terbaik.',
      features: ['Cross Platform', 'Push Notifications', 'Offline Mode', 'App Store Ready']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Platform online shop lengkap dengan sistem pembayaran dan manajemen inventory.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics']
    },
    {
      icon: Database,
      title: 'Sistem Informasi',
      description: 'Sistem manajemen data dan workflow automation untuk efisiensi operasional.',
      features: ['Database Design', 'User Management', 'Reporting', 'API Integration']
    },
    {
      icon: Lightbulb,
      title: 'Digital Innovation',
      description: 'Konsultasi dan implementasi solusi teknologi terbaru untuk transformasi digital.',
      features: ['Tech Consulting', 'Process Automation', 'Digital Strategy', 'Innovation Lab']
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Dukungan teknis berkelanjutan dan maintenance untuk semua project yang telah selesai.',
      features: ['24/7 Support', 'Bug Fixes', 'Updates', 'Performance Monitoring']
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-blue-600">Digital</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi teknologi komprehensif untuk mendukung transformasi digital bisnis dan organisasi Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className={`space-y-2 transition-all duration-300 ${
                hoveredService === index ? 'opacity-100 max-h-40' : 'opacity-70 max-h-20 overflow-hidden'
              }`}>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}