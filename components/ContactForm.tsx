"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    projectType: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = [
    "Website/Landing Page",
    "Mobile Application",
    "E-commerce",
    "Sistem Informasi",
    "Konsultasi IT",
    "Lainnya",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama harus diisi";
    if (!formData.email.trim()) newErrors.email = "Email harus diisi";
    if (!formData.projectType) newErrors.projectType = "Pilih jenis project";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        projectType: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-100">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Terima Kasih!</h3>
          <p className="text-gray-600">
            Pesan Anda telah diterima. Tim kami akan menghubungi Anda dalam 24
            jam.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Kirim pesan lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 max-w-lg mx-auto lg:mx-0 h-fit form-container">
      <div className="mb-5">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Konsultasikan Project Anda
        </h3>
        <p className="text-gray-600 text-sm lg:text-base">
          Konsultasi gratis untuk kebutuhan digital Anda
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm ${
                errors.name
                  ? "border-red-500 bg-red-50/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              placeholder="Nama lengkap Anda"
            />
            {errors.name && (
              <p className="text-red-500 text-xs font-medium mt-0.5">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm ${
                errors.email
                  ? "border-red-500 bg-red-50/50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs font-medium mt-0.5">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-gray-700">
            Nomor WhatsApp <span className="text-gray-400">(opsional)</span>
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-3 py-2.5 border-2 border-gray-200 hover:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-sm"
            placeholder="+62 812-3456-7890 (opsional)"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-gray-700">
            Jenis Project <span className="text-red-500">*</span>
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full px-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 appearance-none bg-white text-sm ${
              errors.projectType
                ? "border-red-500 bg-red-50/50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <option value="">Pilih jenis project</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-xs font-medium mt-0.5">
              {errors.projectType}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-gray-700">
            Deskripsi Kebutuhan
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none hover:border-gray-300 text-sm"
            placeholder="Ceritakan lebih detail tentang project yang Anda inginkan..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-blue-700 transform hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mt-5"
        >
          {isSubmitting ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Konsultasi Gratis Sekarang</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
