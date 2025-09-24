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
    "Website Development",
    "Mobile Application",
    "Sistem Architecture",
    "Sistem Informasi",
    "Konsultasi IT",
    "Perangkat IT",
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
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          projectType: "",
          description: "",
        });
      } else {
        // Handle validation errors from server
        if (result.errors) {
          setErrors(result.errors);
        } else {
          // Handle general errors
          setErrors({
            general: result.error || 'Terjadi kesalahan. Silakan coba lagi.',
          });
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        general: 'Terjadi kesalahan jaringan. Silakan cek koneksi internet Anda.',
      });
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
          <p className="text-gray-600 mb-4">
            Pesan Anda telah berhasil dikirim. Tim kami akan menghubungi Anda dalam <strong>24 jam</strong>.
          </p>
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm mb-4">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Email konfirmasi telah dikirim. Silakan cek inbox atau folder spam Anda.</span>
            </div>
          </div>
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
        {/* General Error Message */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{errors.general}</span>
            </div>
          </div>
        )}

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
