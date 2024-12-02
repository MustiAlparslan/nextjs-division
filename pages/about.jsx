import React from 'react'
import { FaLightbulb, FaCogs, FaUsers, FaUserTie } from 'react-icons/fa'
import MainLayout from '../components/MainLayout'

const teamMembers = [
  { name: 'Osman Oğultürk Kocaman', position: 'CEO' },
  { name: 'Mustafa Batuhan Alparslan', position: 'CTO' },
  { name: 'Cihan Yıldız', position: 'Manager' }
]

export default function About () {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className='relative bg-black text-white py-20 text-center'>
        <h1 className='text-5xl font-extrabold mb-4'>Hakkımızda</h1>
        <p className='text-lg text-gray-400'>
          Biz teknolojiyle geleceği inşa ediyoruz. Modern yazılım çözümlerimizle
          işletmelere değer katıyoruz.
        </p>
      </div>

      {/* About Section - Who We Are */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-6 lg:px-12 text-center'>
          <h2 className='text-4xl font-bold mb-10 text-gray-800'>Biz Kimiz?</h2>
          <p className='text-lg text-gray-600 mb-6'>
            Division Company, dijital dönüşüm yolculuğunda işletmelere rehberlik
            eden bir teknoloji firmasıdır. Modern web ve mobil yazılım
            çözümleriyle müşterilerimize değer katarak projeleri başarıyla
            hayata geçiriyoruz.
          </p>
          <p className='text-lg text-gray-600'>
            Ekibimiz, inovasyona ve mükemmeliyete olan bağlılığıyla, her projeye
            özel çözümler sunar. Hedefimiz, teknolojiyi herkes için erişilebilir
            ve etkili bir araç haline getirmektir.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-6 lg:px-12 text-center'>
          <h2 className='text-4xl font-bold mb-10 text-gray-800'>
            Ne Yapıyoruz?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6 rounded-lg shadow-lg bg-gray-100 hover:shadow-xl transition'>
              <FaLightbulb className='text-5xl text-blue-600 mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                Yenilikçi Çözümler
              </h3>
              <p className='text-gray-600'>
                Modern teknolojilerle yenilikçi yazılım çözümleri üretiyoruz.
                İşletmenizin dijital dönüşümünü hızlandırıyoruz.
              </p>
            </div>
            <div className='p-6 rounded-lg shadow-lg bg-gray-100 hover:shadow-xl transition'>
              <FaCogs className='text-5xl text-green-600 mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                Özel Yazılımlar
              </h3>
              <p className='text-gray-600'>
                İş süreçlerinizi optimize eden ve işletmenize özgü yazılım
                çözümleri geliştiriyoruz.
              </p>
            </div>
            <div className='p-6 rounded-lg shadow-lg bg-gray-100 hover:shadow-xl transition'>
              <FaUsers className='text-5xl text-purple-600 mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                Kapsamlı Destek
              </h3>
              <p className='text-gray-600'>
                Projenizin her aşamasında yanınızdayız. Eğitim ve teknik
                destekle sürekli hizmet sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-6 lg:px-12 text-center'>
          <h2 className='text-4xl font-bold mb-10 text-gray-800'>Ekibimiz</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition'
              >
                <div className='flex justify-center mb-4'>
                  <FaUserTie className='text-5xl text-blue-600' />
                </div>
                <h3 className='text-2xl font-bold mb-2 text-gray-800'>
                  {member.name}
                </h3>
                <p className='text-gray-600'>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='bg-black text-white py-16 text-center'>
        <h2 className='text-4xl font-bold mb-4'>
          Bizimle Çalışmaya Hazır Mısınız?
        </h2>
        <p className='text-lg text-gray-400 mb-6'>
          Projelerinizi hayata geçirmek için bizimle iletişime geçin.
        </p>
        <button
          className='bg-blue-600 px-6 py-3 text-lg font-bold rounded hover:bg-blue-700 transition'
          onClick={() =>
            (window.location.href = 'mailto:info@companydivision.com')
          }
        >
          İletişime Geçin
        </button>
      </div>
    </MainLayout>
  )
}
