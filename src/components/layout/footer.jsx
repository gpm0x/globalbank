import { Link } from 'react-router-dom';
import { getRouteByName } from '@app/router';

/**
 * Main site footer with links and branding
 */
function Footer() {
  return (
    <>
      <footer className="bg-gray-50 overflow-hidden">
        <div className="py-14 bg-black rounded-b-7xl"></div>
        <div className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -m-8 mb-28">
              <div className="w-full md:w-1/2 lg:w-4/12 p-8">
                <div className="md:max-w-xs">
                  <img className="mb-7" src="/images/logo-dark.svg" alt="" />
                  <p className="text-gray-400 font-medium">
                    A Global Bank é uma agência de branding estratégico focada na criação, reformulação e gestão de marcas
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 text-lg text-black font-medium">Sobre</h3>
                <ul>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('contact')}
                    >
                      Contato
                    </Link>
                  </li>

                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('about')}
                    >
                      Nossa História
                    </Link>
                  </li>
                  <li>
                    <a className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">
                      Carreiras
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 text-lg text-black font-medium">Empresa</h3>
                <ul>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('contact')}
                    >
                      Contato
                    </Link>
                  </li>

                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('about')}
                    >
                      Nossa História
                    </Link>
                  </li>
                  <li>
                    <a className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">
                      Carreiras
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:flex-1 p-8">
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-white rounded-full" href="#">
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <img src="/images/footers/twitter.svg" alt="" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Siga-nos no Twitter para atualizações</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-white rounded-full" href="#">
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <img src="/images/footers/instagram.svg" alt="" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Siga-nos no Instagram para atualizações</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-white rounded-full" href="#">
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <img src="/images/footers/tiktok.svg" alt="" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Siga-nos no TikTok para atualizações</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between -m-2">
              <div className="w-auto p-2">
                <p className="inline-block text-sm font-medium text-black/60">© {new Date().getFullYear()} Global Bank</p>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-2 sm:-m-7">
                  <div className="w-auto p-2 sm:p-7">
                    <a className="inline-block text-sm text-black/60 hover:text-black font-medium transition duration-300" href="#">
                      Termos de Uso
                    </a>
                  </div>
                  <div className="w-auto p-2 sm:p-7">
                    <a className="inline-block text-sm text-black/60 hover:text-black font-medium transition duration-300" href="#">
                      Política de Privacidade
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
