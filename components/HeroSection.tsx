"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, CheckCircle, Zap, Users, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import Logo from "./Logo";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: CheckCircle, text: "UKM IT Universitas Negeri Padang" },
    { icon: Zap, text: "Software dan infrastruktur IT" },
    { icon: Clock, text: "Konsultasi Gratis - Response 24 Jam" },
    { icon: Users, text: "Harga Mahasiswa, Kualitas Profesional" },
    { icon: CheckCircle, text: "Portfolio 50+ Project Sukses" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 w-full items-center">
            {/* Left Column - Information */}
            <div
              className={`space-y-8 lg:space-y-10 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="space-y-6 lg:space-y-8">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <Logo />
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                    <span className="block">TEKNOLOGI DAN KREATIFITAS</span>
                    <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      TANPA BATAS
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium max-w-lg">
                    Powered by{" "}
                    <span className="text-blue-600 font-bold">
                      Infinity Technology
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 lg:space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 text-gray-700 transform transition-all duration-500 hover:translate-x-2 hover:text-gray-900 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <feature.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:pt-8">
                <a
                  href="https://wa.me/6285157517798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 font-medium group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:block">
                    WhatsApp: +62 851-5751-7798
                  </span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>

                <a
                  href="mailto:haloinfitech@gmail.com"
                  className="inline-flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:block">
                    Haloinfitech@gmail.com
                  </span>
                  <span className="sm:hidden">Email</span>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              id="contact-form"
              className={`lg:pl-8 ${
                isVisible ? "animate-fade-in-right" : "opacity-0"
              }`}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
