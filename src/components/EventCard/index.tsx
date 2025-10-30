import React from 'react';
import { Evento } from '../../types/events';


type EventCardProps = Omit<Evento, 'id'>;


const EventCard: React.FC<EventCardProps> = ({ nome, data, local }) => {
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
return (
  <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg overflow-hidden mb-6 hover:shadow-2xl transition-shadow duration-300">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 h-64 relative overflow-hidden">
        <img
          src="/optimist_1.jpg" 
          alt={nome}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="md:w-2/3 p-8 bg-white bg-opacity-90">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors">
              {nome}
            </h2>
            
            <div className="flex items-center mb-4 text-cyan-700">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">{dataFormatada}</span>
            </div>

            <div className="flex items-center text-cyan-700">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{local}</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center">
              Saiba mais
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{nome}</h3>
//         <div className="flex items-center text-gray-600 text-sm mb-1">
//           <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
//           <span>{dataFormatada}</span>
//         </div>
//         <div className="flex items-center text-gray-600 text-sm">
//           <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
//           <span>{local}</span>
//         </div>
//       </div>
//     </div>
//   );
// };


export default EventCard;