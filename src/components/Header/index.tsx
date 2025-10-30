'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  pathname?: string;
}

export default function Header({ pathname }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/home', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/onde-velejar', label: 'Onde Velejar' },
    { href: '/classes-veleiros', label: 'Classes de Veleiros' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 pb-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/home">
          <Image
            src="/fmvela_wide.png"
            alt="FMVela"
            width={130}
            height={39}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? 'text-[#F97316] font-medium'
                  : 'text-gray-300 hover:text-[#F97316]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Ícones sociais */}
          <div className="flex space-x-4 ml-4">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="text-gray-300 hover:text-[#F97316] transition-colors"
            >
              <Image
                src="/instagram.png" 
                alt="Instagram"
                width={28}
                height={28}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              aria-label="YouTube"
              className="text-gray-300 hover:text-[#F97316] transition-colors"
            >
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={28}
                height={28}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Botão de login */}
          <Link
            href="/login"
            className="ml-6 bg-[#F97316] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#ea620f] transition-colors"
          >
            Login
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-[#F97316] font-medium'
                    : 'text-gray-300 hover:text-[#F97316]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex space-x-5">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="text-gray-300 hover:text-[#F97316]"
              >
              <Image
                src="instagram.png" 
                alt="Instagram"
                width={22}
                height={22}
                className="hover:opacity-80 transition-opacity"
              />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                aria-label="YouTube"
                className="text-gray-300 hover:text-[#F97316]"
              >
                <Image
                src="/youtube.png"
                alt="YouTube"
                width={22}
                height={22}
                className="hover:opacity-80 transition-opacity"
              />
              </Link>
            </div>

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-[#F97316] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#ea620f] transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
