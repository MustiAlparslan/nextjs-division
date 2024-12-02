import React from 'react'

const HomeContent = () => {
  return (
    <div className='bg-white text-black'>
      {/* Hizmetlerimiz Section */}
      <div className='py-20'>
        <h2 className='text-4xl font-bold text-center mb-10'>Hizmetlerimiz</h2>
        <div className='max-w-6xl mx-auto space-y-20'>
          {/* Web Hizmetleri */}
          <div>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/3'>
                <img
                  src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Web Development'
                  className='w-full h-60 object-cover rounded-lg'
                />
              </div>
              <div className='md:w-2/3 px-6 py-10'>
                <h3 className='text-3xl font-bold mb-4'>Web Yazılımları</h3>
                <p className='text-lg text-gray-600'>
                  Modern ve kullanıcı dostu web yazılımları geliştirerek
                  işletmenize değer katıyoruz. Yenilikçi teknolojilerle
                  projelerinizi hayata geçiriyoruz.
                </p>
              </div>
            </div>
            <hr className='my-10 border-gray-300' />
          </div>

          {/* Mobil Hizmetleri */}
          <div>
            <div className='flex flex-col md:flex-row-reverse items-center'>
              <div className='md:w-1/3'>
                <img
                  src='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Mobile Development'
                  className='w-full h-60 object-cover rounded-lg'
                />
              </div>
              <div className='md:w-2/3 px-6 py-10'>
                <h3 className='text-3xl font-bold mb-4'>Mobil Yazılımlar</h3>
                <p className='text-lg text-gray-600'>
                  iOS ve Android platformlarına özel uygulamalar geliştiriyoruz.
                  Yenilikçi mobil yazılım çözümleriyle iş süreçlerinizi mobil
                  dünyaya taşıyoruz.
                </p>
              </div>
            </div>
            <hr className='my-10 border-gray-300' />
          </div>

          {/* Yapay Zeka Hizmetleri */}
          <div>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/3'>
                <img
                  src='https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Artificial Intelligence'
                  className='w-full h-60 object-cover rounded-lg'
                />
              </div>
              <div className='md:w-2/3 px-6 py-10'>
                <h3 className='text-3xl font-bold mb-4'>
                  Yapay Zeka Çözümleri
                </h3>
                <p className='text-lg text-gray-600'>
                  Yapay zeka teknolojileriyle işletmenizin verimliliğini
                  artırın. Makine öğrenimi ve veri analitiği ile geleceği
                  şekillendirin.
                </p>
              </div>
            </div>
            <hr className='my-10 border-gray-300' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
