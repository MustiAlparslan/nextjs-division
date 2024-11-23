import React from 'react'
import { FaFlagUsa, FaFlag } from 'react-icons/fa'

export const LanguageSwitcher = () => {
  return (
    <div className='flex justify-center items-center mt-6'>
      <div className='relative w-48'>
        <select
          onChange={e => changeLanguage(e.target.value)}
          className='block w-full bg-black text-white border border-gray-700 px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 appearance-none'
        >
          <option value='tr' className='text-white bg-black flex items-center'>
            🇹🇷 Türkçe
          </option>
          <option value='en' className='text-white bg-black flex items-center'>
            🇺🇸 English
          </option>
        </select>
        <div className='absolute inset-y-0 right-2 flex items-center pointer-events-none'>
          <svg
            className='w-4 h-4 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
