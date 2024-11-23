import React from 'react'
import MainLayout from '../components/MainLayout'

export default function ServicePage () {
  return (
    <MainLayout>
      <div className='container mx-auto p-6 h-screen'>
        <h1 className='text-3xl font-bold mb-8'>Servislerimiz</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Website Building */}
          <div className='shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition'>
            <img
              src='/images/service-imgs/buildwebsite.jpg'
              alt='Site Yapımı'
              className='w-full h-32 object-cover rounded-t-lg'
            />
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Site Yapımı</h2>
              <p className='text-base leading-relaxed text-gray-700'>
                Modern ve kullanıcı dostu web siteleri oluşturuyoruz. Projenizi
                tüm aşamalarında destekliyor, yayınlamak ya da kodları teslim
                etmek gibi esneklik sağlıyoruz. SEO uyumlu ve mobil cihazlarla
                uyumlu tasarımlar yaparak, markanızı dijital dünyada
                güçlendirmeye yardımcı oluyoruz.
              </p>
            </div>
          </div>

          {/* Mobile App Building */}
          <div className='shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition'>
            <img
              src='/images/service-imgs/buildmobileapp.jpg'
              alt='Mobil Uygulama Yapımı'
              className='w-full h-32 object-cover rounded-t-lg'
            />
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4'>
                Mobil Uygulama Yapımı
              </h2>
              <p className='text-base leading-relaxed text-gray-700'>
                İhtiyaçlarınıza özel mobil uygulamalar geliştiriyoruz. Projeyi,
                ister sizin adınıza Play Store'a yüklüyor, isterse size teslim
                ediyoruz. Uygulamanızı güvenli, hızlı ve kullanıcı odaklı bir
                şekilde tasarlayarak, mobil kullanıcılar için en iyi deneyimi
                sağlıyoruz.
              </p>
            </div>
          </div>

          {/* QR Menu Creation */}
          <div className='shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition'>
            <img
              src='/images/service-imgs/buildqrapp.jpg'
              alt='QR Menü Oluşturma'
              className='w-full h-32 object-cover rounded-t-lg'
            />
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4'>QR Menü Oluşturma</h2>
              <p className='text-base leading-relaxed text-gray-700'>
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
