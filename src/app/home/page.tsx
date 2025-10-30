import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Seção - Vídeo de abertura */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/home/home.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Conteúdo sobre o vídeo */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Sinta o vento, o sol e a liberdade que só o iatismo oferece.
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            Velejar é mais do que um esporte — é um estilo de vida que conecta você à natureza, desenvolve foco, equilíbrio e trabalho em equipe.
          </p>
        </div>
      </section>

      {/* Seção - Lugares para velejar */}
      <section className="bg-white pt-18">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-10 text-gray-800">
            Conheça os melhores lugares para velejar em Minas Gerais
          </h2>

          {/* Grid de imagens */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {[
              { src: "/home/lago_furnas.jpeg", nome: "Lago de Furnas" },
              { src: "/home/lagoa_santa.jpeg", nome: "Lagoa Santa" },
              { src: "/home/lagoa_ingleses.jpeg", nome: "Lagoa dos Inglêses" },
              { src: "/home/represa_tres_marias.jpeg", nome: "Represa Três Marias" },
            ].map((lugar) => (
              <div key={lugar.nome} className="flex flex-col items-center">
                <Link
                  href="/onde-velejar"
                  className="w-52 h-36 md:w-60 md:h-40 rounded-3xl overflow-hidden shadow-md hover:scale-105 transition-transform"
                >
                  <img
                    src={lugar.src}
                    alt={lugar.nome}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <p className="mt-3 text-lg font-medium text-gray-700">{lugar.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 1 - Convite ao esporte */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              Descubra o Prazer de Velejar
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Seja iniciante ou experiente, as águas de Minas Gerais oferecem
              destinos incríveis para navegar e viver momentos únicos.
            </p>
            <Link
              href="/onde-velejar"
              className="inline-block bg-[#F97316] text-white px-6 py-3 rounded-xl hover:bg-[#ea5d00] transition-colors"
            >
              Conheça as escolas de iatismo
            </Link>
          </div>

          {/* <div className="relative w-full h-80 md:h-96 md:justify-end flex"> */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/home/convite_legal_bg.jpeg"
              alt="Veleiro navegando"
              width={360}
              height={436}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

     {/* Seção 2 - Próximo evento */}
      <section
        className="relative bg-white bg-repeat bg-center"
        style={{
          backgroundImage: "url('/home/regatta_bg.png')",
          backgroundPosition: "center",
          backgroundSize: "auto",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Coluna 1 - Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Prepare-se para a Próxima Regata
            </h2>

            <ol className="space-y-6 pb-6">
              {/* Evento 1 */}
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Campeonato Mineiro de Vela
                  </h3>
                  <p className="text-white text-sm">📅 16 e 17 de Novembro de 2025</p>
                </div>
              </li>

              {/* Evento 2 */}
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Regata da Lagoa Santa
                  </h3>
                  <p className="text-white text-sm">📅 14 de Dezembro de 2025</p>
                </div>
              </li>
            </ol>

            <Link
              href="/eventos"
              className="bg-[#F97316] text-white px-8 py-4 rounded-xl hover:bg-[#ea5d00] transition-colors text-lg font-medium inline-block"
            >
              Ver próximos eventos →
            </Link>
          </div>

          {/* Coluna 2 - Imagem */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/home/regatta_boate.png"
              alt="Veleiro navegando"
              width={360}
              height={436}
              className="object-contain rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Seção 3 - Filiação */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="flex justify-end">
              <Image
                src="/home/filiacao.png"
                alt="Velejadores em equipe"
                width={450}
                height={450}
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Fortaleça a Vela em Minas Gerais, filie-se à Federação Mineira de Iatismo
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Sua participação é essencial para o crescimento da vela em Minas
                Gerais. Em 2024, em parceria com a{" "}
                <strong>CBVela</strong>, o atleta deve se inscrever
                gratuitamente pelo site{" "}
                <a
                  href="https://velaid.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F97316] hover:underline"
                >
                  velaid.com.br
                </a>
                .
              </p>

              <ul className="space-y-5 text-gray-700">
                <li>
                  ⚓ <strong>Filiação FMVela:</strong> pague a anuidade de{" "}
                  <strong>R$ 150,00</strong> via PIX{" "}
                  <span className="font-mono">CNPJ 27.978.856/0001-92</span> e
                  envie o comprovante para{" "}
                  <a
                    href="mailto:contato@fmvela.org.br"
                    className="text-[#F97316] hover:underline"
                  >
                    contato@fmvela.org.br
                  </a>
                  . Direito de participar de regatas nacionais e estaduais.
                </li>
                <li>
                  🌟 <strong>Sócio Velejador:</strong> além dos benefícios de
                  atleta federado, ganhe descontos em cursos, eventos e
                  experiências exclusivas. Após 1 ano, receba uma{" "}
                  <strong>camisa oficial da FMVela</strong>.
                </li>
              </ul>

              <Link
                href="https://velaid.com.br/"
                target="_blank"
                className="mt-8 inline-block bg-[#F97316] text-white px-6 py-3 rounded-xl hover:bg-[#ea5d00] transition-colors"
              >
                Filie-se agora →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
