import React from 'react'

const Hero = ({ scrollToSections }) => {
  return (
    <div className='bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-8'>
      <div className='text-center max-w-xl md:max-w-2xl'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-6 leading-tight'>
          Geleceğinizi Birlikte İnşa Ediyoruz
        </h1>
        <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed'>
          Teknoloji, inovasyon ve kaliteyle sizi başarıya taşıyacak çözümler
          sunuyoruz.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={scrollToSections}
            className='px-8 py-4 bg-white text-black rounded-lg text-base sm:text-lg font-medium hover:bg-gray-200 transition duration-300'
          >
            Daha Fazlasını Keşfet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
