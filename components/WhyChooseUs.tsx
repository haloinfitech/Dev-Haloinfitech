"use client";

import { Users, Award, Clock, Heart, Shield, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Users,
      title: 'Tim Mahasiswa Berbakat',
      description: 'Mahasiswa IT terpilih dari Universitas Negeri Padang dengan kemampuan teknis terdepan dan semangat inovasi tinggi.',
      stats: '20+ Developers'
    },
    {
      icon: Award,
      title: 'Kualitas Profesional',
      description: 'Standar kualitas setara agency profesional dengan harga yang ramah di kantong mahasiswa dan startup.',
      stats: '99% Satisfaction'
    },
    {
      icon: Clock,
      title: 'Response Cepat',
      description: 'Tim yang responsif dengan komitmen response maksimal 24 jam untuk setiap inquiry dan support request.',
      stats: '24 Jam Response'
    },
    {
      icon: Heart,
      title: 'Pendekatan Personal',
      description: 'Kami memahami setiap client secara personal dan memberikan solusi yang customized sesuai kebutuhan spesifik.',
      stats: 'Personal Touch'
    },
    {
      icon: Shield,
      title: 'Garansi Project',
      description: 'Setiap project dilengkapi dengan garansi dan support berkelanjutan untuk memastikan kepuasan client.',
      stats: '6 Bulan Garansi'
    },
    {
      icon: Zap,
      title: 'Teknologi Terbaru',
      description: 'Selalu menggunakan teknologi dan framework terbaru untuk memastikan project Anda future-ready.',
      stats: 'Latest Tech Stack'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Pilih <span className="text-blue-600">HaloInfitech</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kombinasi sempurna antara talenta muda, teknologi terdepan, dan komitmen memberikan yang terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    {advantage.stats}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Project Anda?</h3>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan 50+ client yang telah mempercayakan project digital mereka kepada kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact-form')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
            >
              Konsultasi Gratis
            </a>
            <a
              href="https://wa.me/6285157517798"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}