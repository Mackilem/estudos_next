
import { GetStaticProps, NextPage } from 'next';

import EventCard from '../../components/EventCard';
import { Evento } from '../../types/events';



export default async function HomePage() {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/Goiaba-Intelligence/goiaba_server_addons/13.0/fmvela_events.json',
      //{ next: { revalidate: 60 } }
      { cache: 'no-store' }
    );

    if (!res.ok) {
      throw new Error('Falha ao buscar os dados dos eventos');
    }

    const eventos: Evento[] = await res.json();

    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Próximos Eventos
          </h1>

          {eventos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventos.map((evento) => (
                <EventCard
                  key={evento.id}
                  nome={evento.nome}
                  data={evento.data}
                  local={evento.local}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Nenhum evento encontrado no momento.</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500 text-xl">Ocorreu um erro ao carregar os eventos. Tente novamente mais tarde.</p>
      </div>
    );
  }
}