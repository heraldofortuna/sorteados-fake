import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full max-w-[1440px] m-0 mx-auto border-x-gray shadow-container">
      <div className="flex flex-col">
        <div className="bg-white p-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.png" width={250} height={70} alt="Sortea2" />
            </Link>
            <form className="h-[50px] flex items-center gap-8">
              <button className="text-dark bg-white px-4 py-3 rounded-md border border-light-gray hover:bg-[#e6e6e6] hover:border-[#adadad]">
                Publicar una promoción
              </button>
              <div className="h-full flex items-center">
                <input
                  className="h-full px-3 py-2 rounded-l border border-light-gray transition duration-150 ease-in-out focus:border-blue focus:shadow-input"
                  placeholder="sorteo de un viaje"
                />
                <button className="h-full text-white flex items-center gap-1 bg-blue px-4 py-3 rounded-r-md border border-light-blue">
                  <Image
                    src="/search.svg"
                    width={18}
                    height={18}
                    alt="Sorteo de un viaje"
                  />
                </button>
              </div>
              <button className="text-white flex items-center gap-1 bg-blue px-4 py-3 rounded-md border border-light-blue">
                ACCESO ▼
              </button>
            </form>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#3987B5] to-[#4482CE] text-light">
          <ul className="flex items-center">
            <li className="px-5 py-3">
              <a href="#">Sorteo certificado</a>
            </li>
            <li className="bg-gradient-to-t from-[#1B7C9D] to-[#3495B6] px-5 py-3">
              <a href="#" className="font-bold">
                Hacer un sorteo
              </a>
            </li>
            <li className="px-5 py-3">
              <a href="#">Sorteo avanzado</a>
            </li>
            <li className="px-5 py-3">
              <a href="#">Participar promociones</a>
            </li>
            <li className="px-5 py-3">
              <a href="#">Resultados</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
