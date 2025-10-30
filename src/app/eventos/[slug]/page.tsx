import { notFound } from 'next/navigation';
import { Evento } from '@/types';
import Image from 'next/image';
import GoogleMap from '@/components/GoogleMaps/GoogleMaps';


export default async function EventoDetalhesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const res = await fetch(
    'https://raw.githubusercontent.com/Goiaba-Intelligence/goiaba_server_addons/13.0/fmvela_events.json',
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error('Erro ao buscar eventos:', res.statusText);
    notFound();
  }

  const eventos: Evento[] = await res.json();
  
  const evento = eventos.find(
    (e) => e.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!evento) notFound();

  const dataFormatada = new Date(evento.data)
    .toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    .replace(/^./, (s) => s.toUpperCase());

  return (
    <div className="pt-19 min-h-screen bg-gray-100">
        <div className="relative h-80 w-full">
            <Image
                priority={true}
                key={slug}
                src={'/eventos/optimist_1_banner.jpg'}
                alt={`Imagem do evento ${evento.nome}`}
                fill
                style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white text-center px-4">
                    {evento.nome}
                </h1>
            </div>
        </div>


      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8 mb-12">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sobre o Evento</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{evento.descricao}</p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Data e Local</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xl">{dataFormatada}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xl">{evento.local}</span>
          </div>
        </section>

        <section className="border-t pt-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Localização no Mapa</h2>
          <GoogleMap local={evento.local} />
        </section>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(
//       'https://raw.githubusercontent.com/Goiaba-Intelligence/goiaba_server_addons/13.0/fmvela_events.json'
//     );
//     if (!res.ok) return [];
//     const eventos: Evento[] = await res.json();
//     return eventos.map((e) => ({ slug: e.slug }));
//   } catch (e) {
//     console.error('Erro ao gerar params estáticos:', e);
//     return [];
//   }
// }
