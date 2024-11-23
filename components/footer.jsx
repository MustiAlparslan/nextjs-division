import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer () {
  return (
    <>
      {/* Footer */}
      <footer className='bg-black text-white p-8 mt-auto relative'>
        <div className='container mb-3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Şirket Logosu */}
          <div>
            <img
              src='/images/footerlogo.png'
              className='bg-transparent h-44'
              alt='Footer Logosu'
            />
          </div>

          {/* Bağlantılar */}
          <div>
            <h3 className='text-xl font-bold mb-2'>Bağlantılar</h3>
            <ul>
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
          <div>
            <h3 className='text-xl font-bold mb-2'>Sosyal Medya</h3>
            <ul className='flex space-x-4'>
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
        <div className='absolute bottom-0 left-0 w-full bg-black text-center py-1'>
          <p>&copy; 2024 Division. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  )
}
