import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer () {
  return (
    <footer className='bg-black text-white p-6 sm:p-8 mt-auto'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Şirket Logosu */}
        <div className='flex justify-center md:justify-start'>
          <img
            src='/images/footerlogo.png'
            className='bg-transparent h-32 sm:h-44'
            alt='Footer Logosu'
          />
        </div>

        {/* Bağlantılar */}
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-bold mb-4'>Bağlantılar</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#iletisim' className='hover:text-gray-400'>
                İletişim
              </a>
            </li>
            <li>
              <a href='#kariyer' className='hover:text-gray-400'>
                Kariyer
              </a>
            </li>
            <li>
              <a href='#hakkimizda' className='hover:text-gray-400'>
                Hakkımızda
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div className='text-center md:text-right'>
          <h3 className='text-xl font-bold mb-4'>Sosyal Medya</h3>
          <ul className='flex justify-center md:justify-end space-x-6'>
            <li>
              <a
                href='https://x.com/DivisionCompany'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                <FaXTwitter size={24} />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/division.company/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Telif Hakkı Metni */}
      <div className='bg-black text-center py-4 mt-6 text-sm border-t border-gray-700'>
        <p>&copy; 2024 Division. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}
