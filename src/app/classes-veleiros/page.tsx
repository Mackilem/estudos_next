import Image from 'next/image';

interface ClasseVeleiro {
  nome: string;
  descricao: string;
  imagem: string;
  wikipedia: string;
}

const classes: ClasseVeleiro[] = [
  {
    nome: 'Optimist',
    descricao:
      'O Optimist é uma das classes mais populares do mundo, voltada principalmente para a iniciação de crianças na vela. É um barco pequeno, leve e fácil de manobrar, ideal para o aprendizado das bases do esporte.',
    imagem: '/classes/optimist.webp',
    wikipedia: 'https://pt.wikipedia.org/wiki/Optimist',
  },
  {
    nome: 'Laser',
    descricao:
      'A classe Laser é reconhecida por sua simplicidade e desempenho. É um veleiro rápido, usado amplamente em competições e nos Jogos Olímpicos, ideal para velejadores individuais.',
    imagem: '/classes/laser.png',
    wikipedia: 'https://pt.wikipedia.org/wiki/Laser_(barco)',
  },
  {
    nome: 'Snipe',
    descricao:
      'O Snipe é um veleiro de dois tripulantes, conhecido por sua precisão tática e competitividade. É uma das classes mais tradicionais, com campeonatos ativos em todo o mundo.',
    imagem: '/classes/snipe_1.webp',
    wikipedia: 'https://pt.wikipedia.org/wiki/Snipe',
  },
  {
    nome: 'Dingue',
    descricao:
      'O Dingue é um veleiro projetado para ser seguro e fácil de manobrar. É ideal para passeios em família e navegação em águas costeiras.',
    imagem: '/classes/dingue.gif',
    wikipedia: 'https://pt.wikipedia.org/wiki/Dingue',
  },
];

export default function ClassesDeVeleirosPage() {
  return (
    <div className="min-h-screen bg-white pt-22 pb-12 px-6 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Classes de Veleiros
        </h1>

        <div className="grid gap-12">
          {classes.map((classe) => (
            <div
              key={classe.nome}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Imagem grande */}
              <div className="relative w-full h-72 md:h-96">
                <Image
                  src={classe.imagem}
                  alt={classe.nome}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Texto abaixo */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {classe.nome}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {classe.descricao}
                </p>

                <a
                  href={classe.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-medium hover:text-orange-700 inline-flex items-center"
                >
                  Saiba mais no Wikipedia
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
