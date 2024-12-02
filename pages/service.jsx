import React from 'react'
import MainLayout from '../components/MainLayout'
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaQrcode,
  FaRobot
} from 'react-icons/fa'

// Servis Verileri
const services = [
  {
    id: 1,
    icon: <FaLaptopCode className='text-4xl text-blue-600' />,
    title: 'Web Yazılım',
    description:
      'Kurumsal yazılım geliştirme konusunda sahip olduğumuz çeşitlilik ve tecrübe sayesinde markanızın ihtiyacı olan yazılıma en doğru şekilde ulaşmanızı sağlarız.',
    details: [
      'Kurumsal Web Sitesi',
      'E-Ticaret Web Sitesi',
      'Özel Web Site Yazılımları',
      'Bulut Çözümleri',
      'Yönetim Paneli Yazılımı'
    ]
  },
  {
    id: 2,
    icon: <FaMobileAlt className='text-4xl text-blue-600' />,
    title: 'Mobil Yazılım',
    description:
      'Mobil uygulama ve yazılım konusunda uzman ekibimiz ile mobil uygulama sektöründe en son teknolojiyle hizmet sağlıyoruz.',
    details: [
      'iOS Mobil Uygulama',
      'Android Mobil Uygulama',
      'Native Mobil Programlama',
      'Responsive Mobil Tasarım',
      'Kurumsal Mobil Uygulama'
    ]
  },
  {
    id: 3,
    icon: <FaDesktop className='text-4xl text-blue-600' />,
    title: 'Web Tasarım',
    description:
      'Web sitesi, marka bilinirliği sağlayan, firmanızın büyümesine yardımcı olan ve ürünlerinizin satışlarını artıran etkili bir araçtır.',
    details: [
      'Kurumsal İnternet Sitesi',
      'Kişisel İnternet Sitesi',
      'E-Ticaret İnternet Sitesi',
      'Tanıtım ve Etkinlik Sitesi',
      'Landing Page Tasarımı'
    ]
  },
  {
    id: 4,
    icon: <FaQrcode className='text-4xl text-blue-600' />,
    title: 'QR Menü',
    description:
      'Restoran ve kafe gibi işletmeler için hızlı ve pratik QR menü çözümleri sunuyoruz. Dijital menüler sayesinde müşterileriniz hijyenik ve kolay bir şekilde ürünlerinize ulaşabilir.',
    details: [
      'QR Menü Tasarımı',
      'PDF ve Online Menü Entegrasyonu',
      'Güncellenebilir Menü Özelliği',
      'Mobil ve Tablet Uyumlu Tasarım'
    ]
  },
  {
    id: 5,
    icon: <FaRobot className='text-4xl text-blue-600' />,
    title: 'Yapay Zeka Çözümleri',
    description:
      'Yapay zeka tabanlı çözümlerimizle iş süreçlerinizi otomatikleştiriyor ve verimliliğinizi artırıyoruz. Özel yapay zeka modelleri geliştiriyor ve işinize özel çözümler sunuyoruz.',
    details: [
      'Chatbot ve Sesli Asistan Geliştirme',
      'Özel Yapay Zeka Modelleri',
      'Otomatikleştirilmiş İş Süreçleri'
    ]
  }
]

export default function Service () {
  return (
    <MainLayout>
      <div className='container mx-auto p-6 mt-12 min-h-screen'>
        <h1 className='text-4xl font-extrabold text-gray-800 mb-8 text-center'>
          Hizmetlerimiz
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map(service => (
            <div
              key={service.id}
              className='bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1 max-w-md mx-auto'
            >
              <div className='flex items-center justify-center h-32 bg-gray-100 rounded-t-lg'>
                {service.icon}
              </div>
              <div className='p-6'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
                  {service.title}
                </h2>
                <p className='text-base leading-relaxed text-gray-600'>
                  {service.description}
                </p>
                <ul className='mt-4 text-gray-600'>
                  {service.details.map((detail, index) => (
                    <li key={index}>✔️ {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

Service.title = 'Servislerimiz'
