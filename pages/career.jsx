import React, { useState } from 'react';
import { FaLaptopCode, FaUsers, FaCode, FaServer, FaUniversity } from 'react-icons/fa';
import MainLayout from '../components/MainLayout';

const positions = [
  {
    title: 'Lise Stajyerleri',
    description: 'Teknoloji alanında kendini geliştirmek isteyen lise öğrencilerini arıyoruz.',
    type: 'Staj',
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    details: [
      'Temel yazılım becerilerine sahip olmak',
      'Ekibe hızlı adapte olabilme',
      'Okul onaylı staj programına uygunluk',
    ],
  },
  {
    title: 'Üniversite Stajyerleri',
    description: 'Yazılım geliştirme veya tasarım alanında kendini geliştirmek isteyen üniversite öğrencileri.',
    type: 'Staj',
    icon: <FaUniversity className="text-green-600 text-3xl" />,
    details: [
      'React, HTML ve CSS konusunda temel bilgi',
      'Ekip çalışmasına uygunluk',
      'Analitik düşünme yeteneği',
    ],
  },
  {
    title: 'Frontend Developer',
    description: 'Modern frontend teknolojilerine hakim, kullanıcı deneyimine önem veren geliştiriciler arıyoruz.',
    type: 'Tam Zamanlı',
    icon: <FaLaptopCode className="text-yellow-600 text-3xl" />,
    details: [
      'React ve Next.js konusunda uzmanlık',
      'TailwindCSS ve modern tasarım araçlarına hakimiyet',
      'Çapraz tarayıcı uyumluluğu konusunda deneyim',
    ],
  },
  {
    title: 'Backend Developer',
    description: 'API geliştirme ve veri tabanı yönetimi konusunda deneyimli backend geliştiriciler arıyoruz.',
    type: 'Tam Zamanlı',
    icon: <FaServer className="text-red-600 text-3xl" />,
    details: [
      'Node.js ve Python ile geliştirme deneyimi',
      'PostgreSQL ve MongoDB konusunda bilgi',
      'RESTful API ve GraphQL geliştirme deneyimi',
    ],
  },
  {
    title: 'Bilgisayar Mühendisi',
    description: 'Sistem tasarımı ve yazılım geliştirme alanlarında deneyimli mühendisler.',
    type: 'Tam Zamanlı',
    icon: <FaCode className="text-purple-600 text-3xl" />,
    details: [
      'Algoritma geliştirme ve optimizasyon bilgisi',
      'Yazılım geliştirme süreçlerinde deneyim',
      'Yapay zeka veya veri bilimi bilgisi tercih sebebidir',
    ],
  },
];

export default function Career() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openModal = (position) => {
    setSelectedPosition(position);
  };

  const closeModal = () => {
    setSelectedPosition(null);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Kariyer Fırsatları</h1>
        <p className="text-lg text-gray-400">
          Geleceğinizi birlikte inşa edelim. Yetenekli bireyleri ekibimize katılmaya davet ediyoruz!
        </p>
      </div>

      {/* Career Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  {position.icon}
                  <h2 className="text-xl font-bold text-gray-800">{position.title}</h2>
                </div>
                <p className="text-gray-600 mt-2">{position.description}</p>
                <span
                  className={`inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full ${
                    position.type === 'Staj' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {position.type}
                </span>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => openModal(position)}
                    className="text-sm text-blue-600 hover:text-blue-800 underline transition"
                  >
                    Detayları Görüntüle
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                    Başvur
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedPosition.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPosition.description}</p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Aradığımız Özellikler:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {selectedPosition.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
