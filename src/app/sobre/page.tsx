import React from 'react'
import Image from "next/image";


export const metadata = {
  title: 'Sobre a Federação | FMVela',
  description:
    'Conheça a Diretoria e as fontes de receita da Federação Mineira de Iatismo – FMVela.',
}

export default function SobrePage() {
  return (
    <main className="pt-18 min-h-screen bg-background text-text">
      {/* Overlay do background */}
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="relative w-[2028px] h-[1330px] -translate-x-24 opacity-30">
          <Image
            src="/fmvela_1.png"
            alt="Background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-nautical-gradient text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Sobre a Federação Mineira de Iatismo
          </h1>
          <p className="text-neutral-100 text-lg md:text-xl">
            Promovendo o iatismo em Minas Gerais e incentivando o espírito náutico desde sua fundação.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “A liberdade do vento, a força da vela”
          </blockquote>
        </div>
        <div className="absolute inset-0 bg-[url('/pattern-waves.svg')] opacity-30 bg-cover bg-center"></div>
      </section>

      {/* Diretoria */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display text-primary mb-8 border-l-4 border-secondary pl-4">
            Diretoria
          </h2>
          <p className="text-lg mb-8 text-neutral-700">
            A Diretoria da Federação Mineira de Iatismo – <strong>FMVela</strong> – para o mandato de <strong>21 de junho de 2024 a 31 de março de 2026</strong> é composta por:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Presidente</h3>
              <p className="text-neutral-700">Felipe César Viana</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Vice-presidente</h3>
              <p className="text-neutral-700">Caio Gabriel Ferreira Marcondes</p>
            </div>

            <div className="md:col-span-2 mt-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Conselho Fiscal</h3>
              <ul className="list-disc list-inside text-neutral-700 space-y-1">
                <li>Paulo Selmi Dei Gontijo</li>
                <li>Eugenio Pacelli de Almeida Junior</li>
                <li>Gilvan Gomes Ribeiro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fontes de Receita */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display text-primary mb-8 border-l-4 border-secondary pl-4">
            Fontes de Receita
          </h2>

          <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
            <p>
              A principal fonte de receita da Federação Mineira de Iatismo é a <strong>contribuição dos velejadores federados</strong>, paga no ato da filiação e anualmente para todos os atletas, além das contribuições de clubes náuticos do estado de Minas Gerais interessados em incentivar a vela.
            </p>

            <p>
              A entidade foi constituída de forma a <strong>pleitear verbas públicas</strong> de incentivo ao esporte, mediante aprovação de projetos.
            </p>

            <p>
              A FMVela buscará também <strong>patrocínios com empresas, prefeituras, governo do Estado e pessoas físicas</strong> para suas atividades, principalmente as regatas. Esses eventos poderão receber o nome do patrocinador, que poderá associar sua marca, além de divulgar materiais promocionais.
            </p>

            <p>
              No <strong>Calendário de Competição</strong>, algumas datas estão em aberto e poderão ser oferecidas pelos responsáveis da entidade aos interessados.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
