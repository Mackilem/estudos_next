import React from 'react'

export const metadata = {
  title: 'Onde velejar | FMVela',
  description:
    'Descubra lugares incríveis para velejar em Minas Gerais com a FMVela.',
}

export default function OndeVelejarPage() {
  const locais = [
    {
      nome: 'Lagoa dos Ingleses (Nova Lima)',
      videoUrl: "https://www.youtube.com/embed/Iwxvx1cCbME",
      texto:
        'Um dos locais mais conhecidos para velejar em Minas — águas amplas e vento consistente, ideal para iniciantes e veteranos. Venha conhecer e sentir o movimento das velas por lá.',
    },
    {
      nome: 'Lago de Furnas (Sul de Minas Gerais)',
      videoUrl: "https://www.youtube.com/embed/Oo5Vsuj5RL8?si=Hr3TXr48QVDi4T9e",
      texto:
        'Um dos locais mais conhecidos para velejar em Minas — águas amplas e vento consistente, ideal para iniciantes e veteranos. Venha conhecer e sentir o movimento das velas por lá.',
    },
    {
      nome: 'Lago de Três Marias (Norte de Minas Gerais)',
      videoUrl: "https://www.youtube.com/embed/PQJF7x1IJag?si=rmTqdTdJv5U2bDhh",
      texto:
        'Um dos locais mais conhecidos para velejar em Minas — águas amplas e vento consistente, ideal para iniciantes e veteranos. Venha conhecer e sentir o movimento das velas por lá.',
    },
    {
      nome: 'Lagoa Santa',
      videoUrl: "https://www.youtube.com/embed/gqBPjACRRqQ?si=x_9Ske4C8q-WhfHG",
      texto:
        'Um dos locais mais conhecidos para velejar em Minas — águas amplas e vento consistente, ideal para iniciantes e veteranos. Venha conhecer e sentir o movimento das velas por lá.',
    },
  ]

  return (
    <main className="pt-20 pb-8 min-h-screen bg-background text-foreground">
      {/* Hero / Banner */}
      <section className="relative bg-nautical-gradient text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Onde velejar
          </h1>
          <p className="text-neutral-100 text-lg md:text-xl">
            Explore os melhores pontos para velejar em Minas Gerais com a FMVela.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {locais.map((local, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src={local.videoUrl}
                  title={`Vídeo de ${local.nome}`}
                  width="100%"
                  height="100%"
                  className="rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <h2 className="text-3xl font-display text-color-primary mb-4">
                  {local.nome}
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {local.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
