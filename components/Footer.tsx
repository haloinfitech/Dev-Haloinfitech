"use client";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/haloinfitech",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/haloinfitech",
      label: "Twitter",
    },
    { icon: Github, href: "https://github.com/haloinfitech", label: "Github" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/haloinfitech",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { title: "Layanan", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Tentang Kami", href: "#about" },
    { title: "Testimoni", href: "#testimonials" },
  ];

  const services = [
    { title: "Web Development", href: "#services" },
    { title: "Mobile Apps", href: "#services" },
    { title: "E-commerce", href: "#services" },
    { title: "Konsultasi IT", href: "#services" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="dark" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              UKM IT Universitas Negeri Padang yang berfokus pada solusi
              teknologi infinity untuk transformasi digital bisnis dan
              organisasi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-400">
                  Universitas Negeri Padang
                  <br />
                  Sumatera Barat, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a
                  href="https://wa.me/6285157517798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +62 851-5751-7798
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:haloinfitech@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  haloinfitech@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 HaloInfitech - Universitas Negeri Padang. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
