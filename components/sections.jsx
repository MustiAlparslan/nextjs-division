import React from 'react'

const Sections = () => {
  return (
    <div className='bg-white text-black'>
      {/* About Section */}
      <div className='py-20'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-10 text-gray-800'>Hakkımızda</h2>
          <p className='text-lg text-gray-600 mb-10'>
            Division Company, modern **web** ve **mobil yazılım çözümleri**
            sunarak işletmelerin dijital dönüşüm süreçlerini
            kolaylaştırmaktadır. Müşterilerimizin ihtiyaçlarına uygun teknolojik
            çözümler geliştirmekte ve projeleri başarıyla hayata geçirmekteyiz.
          </p>
          <div className='flex flex-col md:flex-row gap-10 justify-center'>
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
                Web Yazılımları
              </h3>
              <p className='text-gray-600'>
                Hızlı, modern ve kullanıcı dostu web yazılım çözümleri ile
                işletmenize değer katıyoruz.
              </p>
            </div>
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
                Mobil Yazılımlar
              </h3>
              <p className='text-gray-600'>
                iOS ve Android platformlarına yönelik yenilikçi mobil yazılım
                çözümleri sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className='py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-10 text-gray-800'>Misyonumuz</h2>
          <p className='text-lg text-gray-600'>
            Yenilikçi yazılımlar geliştirerek, müşterilerimizin iş hedeflerine
            ulaşmalarını sağlamak ve sektörde fark yaratmak.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className='py-20'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-10 text-gray-800'>Vizyonumuz</h2>
          <p className='text-lg text-gray-600'>
            Dijital inovasyon ve teknoloji alanında global çapta tanınan bir
            lider şirket olmak.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className='py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-10 text-gray-800'>
            İletişime Geçin
          </h2>
          <p className='text-lg text-gray-600 mb-6'>
            Bize ulaşarak projelerinizi birlikte hayata geçirelim.
          </p>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            <div className='flex items-center gap-2 text-gray-600'>
              <span>📧</span> info@companydivision.com
            </div>
            <div className='flex items-center gap-2 text-gray-600'>
              <span>📞</span> +90 532 487 28 09
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sections
