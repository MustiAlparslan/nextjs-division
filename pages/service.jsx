import React from 'react'
import MainLayout from '../components/MainLayout'
import { FaLaptopCode, FaMobileAlt, FaQrcode } from 'react-icons/fa'

export default function ServicePage () {
  return (
    <MainLayout>
      <div className='container mx-auto p-6 mt-12 min-h-screen'>
        <h1 className='text-4xl font-extrabold text-gray-800 mb-8 text-center'>
          Servislerimiz
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Website Building */}
          <div className='bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1'>
            <div className='flex items-center justify-center h-24 bg-gray-100 rounded-t-lg'>
              <FaLaptopCode className='text-4xl text-gray-700' />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
                Site Yapımı
              </h2>
              <p className='text-base leading-relaxed text-gray-600'>
                Modern ve kullanıcı dostu web siteleri oluşturuyoruz. Projenizi
                tüm aşamalarında destekliyor, yayınlamak ya da kodları teslim
                etmek gibi esneklik sağlıyoruz. SEO uyumlu ve mobil cihazlarla
                uyumlu tasarımlar yaparak, markanızı dijital dünyada
                güçlendirmeye yardımcı oluyoruz.
              </p>
            </div>
          </div>

          {/* Mobile App Building */}
          <div className='bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1'>
            <div className='flex items-center justify-center h-24 bg-gray-100 rounded-t-lg'>
              <FaMobileAlt className='text-4xl text-gray-700' />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
                Mobil Uygulama Yapımı
              </h2>
              <p className='text-base leading-relaxed text-gray-600'>
                İhtiyaçlarınıza özel mobil uygulamalar geliştiriyoruz. Projeyi,
                ister sizin adınıza Play Store'a yüklüyor, isterse size teslim
                ediyoruz. Uygulamanızı güvenli, hızlı ve kullanıcı odaklı bir
                şekilde tasarlayarak, mobil kullanıcılar için en iyi deneyimi
                sağlıyoruz.
              </p>
            </div>
          </div>

          {/* QR Menu Creation */}
          <div className='bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1'>
            <div className='flex items-center justify-center h-24 bg-gray-100 rounded-t-lg'>
              <FaQrcode className='text-4xl text-gray-700' />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
                QR Menü Oluşturma
              </h2>
              <p className='text-base leading-relaxed text-gray-600'>
                Restoran ve kafe gibi işletmeler için hızlı ve pratik QR menü
                çözümleri sunuyoruz. Müşterilerinizin menünüze dijital olarak
                erişmesini sağlayarak, basılı menülere olan ihtiyacı
                azaltıyoruz. QR menüler, hijyenik, güncellenebilir ve kullanıcı
                dostu bir seçenek sunar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
