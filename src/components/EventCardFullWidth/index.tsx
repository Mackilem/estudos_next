'use client'; // Necessário para os efeitos de hover

import React from 'react';
import Link from 'next/link';
import { Evento } from '../../types/events';

// Adicionamos uma prop opcional para a URL da imagem
interface EventCardFullWidthProps extends Omit<Evento, 'id'> {
  imagemUrl?: string;
}

const EventCardFullWidth: React.FC<EventCardFullWidthProps> = ({ 
  nome, 
  data, 
  local, 
  slug,
  imagemUrl = `https://picsum.photos/seed/${nome}/800/600.jpg` // Imagem padrão dinâmica
}) => {
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
<div className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-8">
  <div className="flex flex-col md:flex-row">
    {/* Imagem do evento */}
    <div className="md:w-1/3 h-64 relative overflow-hidden">
      <img
        src={imagemUrl}
        alt={`Imagem do evento ${nome}`}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Conteúdo */}
    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 hover:text-gray-700 transition-colors">
          {nome}
        </h2>

        <div className="flex items-center mb-3 text-gray-600">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-base">{dataFormatada}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-base">{local}</span>
        </div>
      </div>

      {/* Ações */}
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href={`/eventos/${slug}`}
          className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300 inline-flex items-center"
        >
          Saiba mais
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

        <Link
          href={`/eventos/${slug}`}
          className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 inline-flex items-center shadow-sm hover:shadow-md"
        >
          Inscreva-se
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

      </div>
    </div>
  </div>
</div>

  );
};

export default EventCardFullWidth;