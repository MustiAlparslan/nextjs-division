import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-4 transition duration-500 ${
        isScrolled ? 'bg-black shadow-lg text-white' : 'bg-black text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <img
            src="/images/textlogo.png"
            alt="Başlık Logosu"
            className="h-6 sm:h-8"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`absolute top-full left-0 w-full md:static md:w-auto transition-all duration-500 overflow-hidden ${
            menuOpen ? 'max-h-64' : 'max-h-0'
          } md:max-h-none bg-black md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 hover:text-gray-400 transition duration-300"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block py-2 px-4 hover:text-gray-400 transition duration-300"
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link
                href="/references"
                className="block py-2 px-4 hover:text-gray-400 transition duration-300"
              >
                Referanslarımız
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
