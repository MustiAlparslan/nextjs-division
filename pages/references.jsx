import MainLayout from '../components/MainLayout'
import { FiExternalLink } from 'react-icons/fi' // React Icons'dan ikon ekleniyor

const references = [
  {
    company: 'Pusula Alüminyum',
    logo: 'https://i.imgur.com/R72N05s.png',
    comment:
      'Şirketimiz için bir Web sitesine ihtiyacımız oldu ve çevremizden Division tavsiye eldildi, kendileri ile sürekli iletişim halindeydik ve sorularımızı anında yanıtladılar. İstediğimiz revizeleri saatler içerisinde yaparak istediğimiz web sitesini Division sayesinde yayınladık. Division`ı tercih etmekten çok memnun kaldık. Teşekkürler Division Company.',
    rating: 5,
    url: 'https://pusulaaluminyum.org.tr/'
  },
  {
    company: 'Ebru Metal',
    logo: 'https://i.imgur.com/z4FhiR0.png',
    comment:
      'İstediğimiz Web sitesini çok kısa bir sürede tam istediğimiz gibi teslim ettiler, teslim sonrasında da kendilerinden destek almaya devam ettik ve çok memnun kaldık. Teşekkürler Division ekibi😊',
    rating: 4,
    url: 'https://companydivision.shop/'
  }
]

export default function References () {
  return (
    <MainLayout>
      <div className='min-h-screen bg-white text-black flex flex-col items-center justify-center'>
        {/* Başlık */}
        <h1 className='text-4xl font-bold mb-8 text-center'>Referanslarımız</h1>

        {/* İçerik */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4'>
          {references.map((ref, index) => (
            <div
              key={index}
              className='p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between h-full'
            >
              <div>
                <div className='flex items-center mb-4'>
                  <img
                    src={ref.logo}
                    alt={ref.company}
                    className='w-16 h-16 rounded-full mr-4'
                  />
                  <div>
                    <p className='font-semibold text-lg'>{ref.company}</p>
                  </div>
                </div>
                <p className='mt-2 text-sm flex-grow'>{ref.comment}</p>
              </div>
              <div>
                <div className='mt-4 flex'>
                  {Array.from({ length: ref.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-yellow-500'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17.75l-6.518 3.462 1.243-7.252L2 9.288l7.262-.994L12 2.5l2.738 5.794L22 9.288l-4.725 4.672 1.243 7.252z' />
                    </svg>
                  ))}
                </div>
                <div className='mt-4 flex items-center'>
                  <a
                    href={ref.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-800 transition flex items-center'
                  >
                    <FiExternalLink className='mr-2 h-5 w-5' />
                    <span>{ref.company}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

References.title = 'Referanslarımız'
