import { MessageCircle } from "lucide-react";
import Animacao from "./animacao";

export default function Hero() {
  function abrirWhatsapp(url: string | URL | undefined) {
    window.open(url, "_blank");
  }

  const whatsapp = <MessageCircle size={32} />;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">
                Eu <span className="text-purple-600">facilito</span> sua busca
                pelo <span className="text-purple-600">imóvel</span> dos sonhos,
                sem complicações.
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>

              <button
                className="inline-flex mt-4 px-6 py-3 text-xl font-bold text-white transition-all duration-200 bg-purple-600 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600"
                onClick={() => {
                  abrirWhatsapp(
                    "https://wa.me/556292896272?text=Olá,%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20imóvel."
                  );
                }}
              >
                Whatsapp <span className="ml-4">{whatsapp}</span>
              </button>
            </div>
          </div>

          <div className="w-full h-full">
            <Animacao />
          </div>
        </div>
      </div>
    </section>
  );
}
