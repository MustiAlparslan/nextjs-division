import React from 'react'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'

export default function Footer () {
  return (
    <footer className='bg-black text-white p-6 sm:p-8 mt-auto'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Şirket Bilgileri */}
        <div className='flex flex-col items-center md:items-start'>
          <img
            src='/images/footerlogo.png'
            className='bg-transparent h-32 sm:h-44'
            alt='Footer Logosu'
          />
          <p className='mt-4 text-sm text-gray-400'>
            Division Company, modern yazılım çözümleri sunarak işletmelerin
            dijital dönüşüm süreçlerini kolaylaştırır.
          </p>
        </div>

        {/* Bağlantılar */}
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-bold mb-4'>Bağlantılar</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='/about' className='hover:text-gray-400'>
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href='/service' className='hover:text-gray-400'>
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-gray-400'>
                İletişim
              </Link>
            </li>
            <li>
              <Link href='/career' className='hover:text-gray-400'>
                Kariyer
              </Link>
            </li>
            <li>
              <Link href='/references' className='hover:text-gray-400'>
                Referanslar
              </Link>
            </li>
          </ul>
        </div>

        {/* Yasal ve Destek */}
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-bold mb-4'>Yasal ve Destek</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='/upcoming' className='hover:text-gray-400'>
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link href='/upcoming' className='hover:text-gray-400'>
                Kullanım Şartları
              </Link>
            </li>
            <li>
              <Link
                href='/upcoming'
                className='hover:text-gray-400'
              >
                Sıkça Sorulan Sorular
              </Link>
            </li>
            <li>
              <Link href='/destek' className='hover:text-gray-400'>
                Destek Merkezi
              </Link>
            </li>
            <li>
              <Link href='/cerez-politikasi' className='hover:text-gray-400'>
                Çerez Politikası
              </Link>
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
