import React from 'react';
import MainLayout from '../components/MainLayout';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Teklif Alın & İletişime Geçin</h1>
        <p className="text-lg text-gray-400">
          Projeleriniz için size en uygun çözümleri sunmak için buradayız.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">İletişim Bilgilerimiz</h2>
              <p className="text-gray-600 mb-8">
                Aşağıdaki iletişim bilgilerini kullanarak bize ulaşabilirsiniz. Ayrıca proje
                teklifinizi göndermek için yan taraftaki formu doldurabilirsiniz.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 text-2xl mr-4" />
                  <a
                    href="mailto:info@companydivision.com"
                    className="text-gray-700 hover:text-blue-600 text-lg font-medium"
                  >
                    info@companydivision.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-green-600 text-2xl mr-4" />
                  <a
                    href="tel:+905324872809"
                    className="text-gray-700 hover:text-green-600 text-lg font-medium"
                  >
                    +90 532 487 28 09
                  </a>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-red-600 text-2xl mr-4" />
                  <p className="text-gray-700 text-lg font-medium">
                    Ankara, Türkiye
                  </p>
                </div>
              </div>
            </div>

            {/* Combined Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Teklif Alın & Bize Yazın</h2>
              <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="İsminizi girin"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Telefon numaranızı girin"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project-details">
                    Proje Detayları
                  </label>
                  <textarea
                    id="project-details"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Projeniz hakkında detaylar yazın"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
