import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header ({ isScrolled }) {
  const router = useRouter()

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-4 transition duration-500 ${
        isScrolled ? 'bg-black shadow-lg text-white' : 'bg-black text-white'
      }`}
    >
      <div className='container mx-auto flex justify-around items-center'>
        {/* Logo */}
        <Link href='/' className='text-xl font-bold'>
          <img
            src='/images/textlogo.png' // Logonun yolunu kontrol edin (public/images/textlogo.png)
            alt='Başlık Logosu'
            style={{ height: 20 }}
            className='h-4'
          />
        </Link>
        {/* Navigasyon */}
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link
                href='/about'
                className='hover:text-gray-400 transition duration-300'
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href='/service'
                className='hover:text-gray-400 transition duration-300'
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link
                href='/references'
                className='hover:text-gray-400 transition duration-300'
              >
                Referanslarımız
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
