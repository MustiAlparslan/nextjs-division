import MainLayout from '../components/MainLayout';

const references = [
  {
    company: 'Pusula Alüminyum',
    industry: 'Yazılım ve Bilişim',
    logo: 'https://via.placeholder.com/150',
    comment: 'Çok memnun kaldık! Projemiz zamanında ve eksiksiz teslim edildi.',
    rating: 5,
  },
  {
    company: 'Ebru Metal',
    industry: 'Grafik ve Tasarım',
    logo: 'https://via.placeholder.com/150',
    comment: 'Yaratıcı çözümleriyle projelerimize büyük katkı sağladılar.',
    rating: 4,
  },
];

export default function References() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
        {/* Başlık */}
        <h1 className="text-4xl font-bold mb-8 text-center">Referanslarımız</h1>
        
        {/* İçerik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {references.map((ref, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={ref.logo}
                  alt={ref.company}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-lg">{ref.company}</p>
                  <p className="text-sm text-gray-500">{ref.industry}</p>
                </div>
              </div>
              <p className="mt-2 text-sm">{ref.comment}</p>
              <div className="mt-4 flex">
                {Array.from({ length: ref.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.75l-6.518 3.462 1.243-7.252L2 9.288l7.262-.994L12 2.5l2.738 5.794L22 9.288l-4.725 4.672 1.243 7.252z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
References.title = 'Referanslarımız'
