import React from 'react'
import { FaSquarePhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export default function Sections () {
  return (
    <>
      {/* Hakkımızda */}
      <section
        id='about-us'
        className='py-12 px-4 bg-white flex justify-center items-center'
      >
        <article className='bg-gray-100 p-8 rounded-lg shadow-lg w-2/3 transition duration-500 hover:shadow-2xl'>
          <header>
            <h2 className='text-3xl font-bold mb-4 text-center text-black'>
              Hakkımızda
            </h2>
          </header>
          <p className='text-gray-700 text-center'>
            Division Company olarak, mobil uygulama geliştirme alanında
            inovasyon ve mükemmeliyet odaklı hizmet sunmaktayız. Uzman ekibimiz
            en son teknolojileri takip ederek müşterilerimizin ihtiyaçlarına en
            uygun çözümleri sunmayı hedeflemektedir.
          </p>
        </article>
      </section>

      {/* Misyonumuz */}
      <section
        id='mission'
        className='py-12 px-4 bg-gray-100 flex justify-center items-center'
      >
        <article className='bg-white p-8 rounded-lg shadow-lg w-2/3 transition duration-500 hover:shadow-2xl'>
          <header>
            <h2 className='text-3xl font-bold mb-4 text-center text-black'>
              Misyonumuz
            </h2>
          </header>
          <p className='text-gray-700 text-center'>
            Teknoloji ve yaratıcılığı bir araya getirerek, en yenilikçi ve
            etkili mobil uygulama çözümlerini sunmayı hedefliyoruz.
          </p>
        </article>
      </section>

      {/* Vizyonumuz */}
      <section
        id='vision'
        className='py-12 px-4 bg-gray-100 flex justify-center items-center'
      >
        <article className='bg-white p-8 rounded-lg shadow-lg w-2/3 transition duration-500 hover:shadow-2xl'>
          <header>
            <h2 className='text-3xl font-bold mb-4 text-center text-black'>
              Vizyonumuz
            </h2>
          </header>
          <p className='text-gray-700 text-center'>
            Mobil uygulama geliştirme alanında, global çapta tanınan ve tercih
            edilen bir lider olmayı hedefliyoruz.
          </p>
        </article>
      </section>

      {/* Değerlerimiz */}
      <section
        id='values'
        className='py-12 px-4 bg-gray-100 flex justify-center items-center'
      >
        <article className='bg-white p-8 rounded-lg shadow-lg w-2/3 transition duration-500 hover:shadow-2xl'>
          <header>
            <h2 className='text-3xl font-bold mb-4 text-center text-black'>
              Değerlerimiz
            </h2>
          </header>
          <div className='m-auto max-w-[600px] w-full'>
            <ul className='text-gray-700 text-left space-y-4'>
              <li>
                <strong className='font-semibold'>İnovasyon:</strong> Sürekli
                olarak yenilikçi çözümler sunmak.
              </li>
              <li>
                <strong className='font-semibold'>Müşteri Odaklılık:</strong>{' '}
                Müşteri memnuniyetini her zaman ön planda tutmak.
              </li>
              <li>
                <strong className='font-semibold'>Kalite:</strong> Daima en
                yüksek kalitede hizmet sağlamak.
              </li>
              <li>
                <strong className='font-semibold'>Takım Çalışması:</strong>{' '}
                Uyumlu ve etkili bir ekip olarak çalışmak.
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* İletişim */}
      <section
        id='contact'
        className='py-12 px-4 bg-white flex justify-center items-center'
      >
        <article className='bg-gray-100 p-8 rounded-lg shadow-lg transition duration-500 hover:shadow-2xl'>
          <header>
            <h2 className='text-3xl font-bold mb-4 text-center text-black'>
              İletişim
            </h2>
          </header>
          <p className='text-gray-700 text-center mb-4'>
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:
          </p>
          <address className='not-italic text-gray-700 text-center space-y-4'>
            <p className='flex items-center justify-center gap-2'>
              <MdEmail size={25} color='#000090' />
              <span className='font-semibold'>info@companydivision.com</span>
            </p>
            <p className='flex items-center justify-center gap-2'>
              <FaSquarePhone size={23} color='#000090' />
              <span className='font-semibold'>+90 532 487 28 09</span>
            </p>
          </address>
        </article>
      </section>
    </>
  )
}
