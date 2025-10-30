import EventCardFullWidth from '@/components/EventCardFullWidth';
import { Evento } from '../../types/events';

export default async function EventosPage() {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/Goiaba-Intelligence/goiaba_server_addons/13.0/fmvela_events.json',
    );

    if (!res.ok) {
      throw new Error('Falha ao buscar os dados dos eventos');
    }

    const eventos: Evento[] = await res.json();
    const eventosOrdenados = [...eventos].sort((a, b) => b.data.localeCompare(a.data));

    return (
      <div className="pt-25 pb12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Próximos Eventos
          </h1>

          <div className="flex flex-col gap-8">
            {eventosOrdenados.length > 0 ? (
              eventosOrdenados.map((evento) => (
                <EventCardFullWidth
                  key={evento.id}
                  nome={evento.nome}
                  slug={evento.slug}
                  data={evento.data}
                  local={evento.local}
                  descricao={evento.descricao}
                  // imagemUrl={evento.imagemUrl} // se tiver imagem
                />
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">
                Nenhum evento encontrado no momento.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <p className="text-red-500 text-xl text-center">
          Ocorreu um erro ao carregar os eventos. Tente novamente mais tarde.
        </p>
      </div>
    );
  }
}
