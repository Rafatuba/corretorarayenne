import Logo from "../assets/ray-logo.png";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="relative py-4 md:py-6 bg-imobiliaria">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              title=""
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img className="w-48" src={Logo} alt="" />
            </a>
          </div>

          {/* <div className="flex lg:hidden">
            <button type="button" className="text-gray-900">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div> */}

          <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16 text-white text-lg">
            <a
              href="#"
              title=""
              className="font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Soluções
            </a>

            <a
              href="#"
              title=""
              className="font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Catálogo
            </a>

            <a
              href="#"
              title=""
              className="font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Quem sou
            </a>

            <a
              href="#"
              title=""
              className="font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              CRECI
            </a>
          </div>

          <div className="flex gap-2 lg:gap-4 lg:ml-auto lg:flex lg:items-center  text-white">
            <a
              href="https://www.instagram.com/ray.iasmin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <Instagram size={36} />
            </a>
            <a href="https://www.facebook.com/ray.iasmin" target="_blank">
              <Facebook size={36} />
            </a>
            <a
              href="https://wa.me/556292896272?text=Olá,%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20imóvel."
              target="_blank"
            >
              <MessageCircle size={36} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
