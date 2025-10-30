import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-6 md:gap-8">
            
            {/* Coluna 1 - Mapa do site */}
            <div className="text-left space-y-2">
            <h4 className="font-semibold mb-2">Mapa do Site</h4>
            <ul className="text-sm space-y-1">
                <li><a href="/" className="hover:underline">Início</a></li>
                <li><a href="/sobre" className="hover:underline">Sobre</a></li>
                <li><a href="/eventos" className="hover:underline">Eventos</a></li>
                <li><a href="/onde-velejar" className="hover:underline">Onde Velejar</a></li>
                <li><a href="/contato" className="hover:underline">Contato</a></li>
            </ul>
            </div>

            {/* Coluna 2 - Frase e botão */}
            <div className="text-center">
            <h3 className="text-2xl font-display mb-3">“Unindo vento, vela e tradição.”</h3>
            <p className="text-neutral-100 mb-4">
                A FMVela segue fortalecendo o iatismo mineiro com transparência e paixão pelo mar.
            </p>
            <a
                href="/contato"
                className="inline-block bg-secondary text-white font-medium px-6 py-2 rounded-lg hover:bg-secondary-light transition"
            >
                Entre em Contato
            </a>
            </div>

            {/* Coluna 3 - Logo */}
            <div className="flex flex-col justify-center">
              <img
                  src="/fmvela.png"
                  alt="Logo FMVela"
                  className="h-20 w-auto object-contain"
              />
            
              {/* Ícones sociais */}
              <div className="space-x-4 ml-4 pt-6 flex justify-center">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-gray-300 hover:text-[#F97316] transition-colors"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
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
                    width={32}
                    height={32}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
            </div>
        </div>

      {/* Linha inferior */}
      <div className="border-t border-blue-900 text-center py-4 text-sm text-blue-200">
        © {new Date().getFullYear()} FMVela — Todos os direitos reservados.
      </div>
    </footer>
  );
}
