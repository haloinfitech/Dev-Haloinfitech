"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Nagari Guguak Malalo - Regional Digital Portal",
      category: "Government Portal",
      description:
        "Portal layanan publik digital komprehensif untuk Nagari Guguak Malalo, Sumatera Barat dengan fitur layanan pemerintahan, platform UMKM, promosi wisata, dan sistem autentikasi multi-role.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=500&q=80",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "Socket.IO",
      ],
      demoUrl: "https://guguakmalalo.id",
      githubUrl: "https://github.com/Ryan-infitech/Nagari-Guguak-Malalo-WebApp",
    },
    {
      title: "TokoTech - E-Commerce Platform",
      category: "E-Commerce",
      description:
        "Platform e-commerce full-stack untuk produk teknologi dengan pemrosesan pembayaran aman via Midtrans, dashboard admin dengan analytics real-time, dan manajemen inventory.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
      technologies: [
        "Next.js 14",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "Midtrans",
        "Chart.js",
      ],
      demoUrl: "https://tokotech.live/",
      githubUrl: "https://github.com/Ryan-infitech/Tokotech-webApp",
    },
    {
      title: "Indonesia Disaster Monitoring System",
      category: "Web Application",
      description:
        "Aplikasi web interaktif yang menyediakan informasi real-time tentang bencana alam di Indonesia dengan menggunakan React, Leaflet.js, dan AWS untuk deployment cloud yang scalable.",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=500&q=80",
      technologies: ["React", "Leaflet.js", "AWS", "Node.js", "BNPB API"],
      demoUrl: "https://petabencanaindonesia.web.id/",
      githubUrl: "https://github.com/Ryan-infitech/Map-Informasi-Bencana",
    },
    {
      title: "Hospital Management System",
      category: "Healthcare System",
      description:
        "Aplikasi web komprehensif untuk mengelola operasi rumah sakit, janji temu, dan catatan pasien yang dikembangkan menggunakan framework Laravel dan database MySQL.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=500&q=80",
      technologies: ["PHP", "Laravel", "MySQL"],
      demoUrl: "#",
      githubUrl: "https://github.com/Ryan-infitech/Rumah-Sakit-Laravel",
    },
    {
      title: "Java Social Media Application",
      category: "Desktop Application",
      description:
        "Aplikasi media sosial sederhana yang dibangun menggunakan Java dengan antarmuka grafis (GUI) menggunakan JFrame Form dan terintegrasi dengan AWS DynamoDB sebagai database.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=500&q=80",
      technologies: ["Java", "JFrame", "AWS DynamoDB", "NetBeans"],
      demoUrl: "#",
      githubUrl: "https://github.com/Ryan-infitech/Aplikasi-SocialMedia-java",
    },
    {
      title: "HostPro Platform",
      category: "Online Learning",
      description:
        "Platform web full-stack untuk kelas online dan layanan MC/EO dengan fitur manajemen kelas, booking event, dan sistem pembayaran terintegrasi.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-blue-600">Terbaru</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beberapa project terbaru yang telah kami kerjakan dengan berbagai
            teknologi dan industri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
