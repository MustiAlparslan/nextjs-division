import React from 'react';
import { FaUserTie } from 'react-icons/fa'; // Avatar simgesi için
import MainLayout from '../components/MainLayout';

export default function Team() {
  // Ekip üyeleri listesi
  const teamMembers = [
    {
      name: 'Osman Oğultürk Kocaman',
      position: 'CEO',
    },
    {
      name: 'Mustafa Batuhan Alparslan',
      position: 'CTO',
    },
    {
      name: 'Cihan Yıldız',
      position: 'Manager',
    },
  ];

  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out text-center"
            >
              {/* Avatar İkonu */}
              <div className="flex justify-center mb-4">
                <FaUserTie className="text-5xl text-gray-700" />
              </div>
              {/* Üye İsmi */}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {member.name}
              </h3>
              {/* Pozisyon */}
              <p className="text-gray-500 text-lg">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
