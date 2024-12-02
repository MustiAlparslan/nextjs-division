import React from 'react';

export default function UpComing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">Yapım Aşamasında</h1>
        <p className="text-lg mb-8 text-gray-400">
          Bu sayfa yapım aşamasındadır. En kısa sürede hizmet vermeye başlayacaktır.
        </p>
        <p className="text-gray-500 mb-8">
          Lütfen daha fazla bilgi için bizimle iletişime geçmekten çekinmeyin.
        </p>
        <a
          href="/"
          className="bg-white text-black py-3 px-6 rounded-lg text-lg hover:bg-gray-300 transition"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}
