"use client";

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Andi Wijaya',
      position: 'CEO, StartupTech',
      company: 'StartupTech Indonesia',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'HaloInfitech berhasil mengembangkan platform e-learning kami dengan sempurna. Tim yang profesional, komunikasi lancar, dan hasil melebihi ekspektasi. Highly recommended!'
    },
    {
      name: 'Sari Melati',
      position: 'Founder, EcoFashion',
      company: 'EcoFashion Store',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Website e-commerce yang dibuat sangat user-friendly dan responsive. Penjualan online kami meningkat 200% setelah launching. Terima kasih HaloInfitech!'
    },
    {
      name: 'Dr. Bambang Sutrisno',
      position: 'Direktur IT, RS Medika',
      company: 'Rumah Sakit Medika',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Sistem informasi manajemen pasien yang dikembangkan sangat membantu efisiensi operasional rumah sakit. Tim HaloInfitech sangat memahami kebutuhan industri healthcare.'
    },
    {
      name: 'Maya Kusuma',
      position: 'Marketing Manager',
      company: 'Digital Agency Pro',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Aplikasi mobile yang dikembangkan untuk client kami mendapat response sangat positif. UI/UX design-nya modern dan performance-nya excellent. Great job!'
    },
    {
      name: 'Reza Pratama',
      position: 'Owner, Cafe Kopi Nusantara',
      company: 'Cafe Chain',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Sistem POS yang dibuat sangat memudahkan operasional cafe kami. Laporan real-time dan inventory management-nya sangat akurat. Investasi yang sangat worthit!'
    },
    {
      name: 'Linda Sari',
      position: 'Kepala Divisi IT',
      company: 'Universitas Swasta',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Portal akademik yang dikembangkan sangat user-friendly untuk mahasiswa dan dosen. Support team yang responsif dan selalu siap membantu. Excellent service!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kata <span className="text-blue-600">Client</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepercayaan dan kepuasan client adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 relative group hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
                <Quote className="h-8 w-8" />
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 bg-blue-600 text-white p-8 rounded-2xl">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Bergabung dengan 50+ Client Puas</h3>
              <p className="opacity-90">Mulai project digital Anda bersama tim terpercaya</p>
            </div>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}