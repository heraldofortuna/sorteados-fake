"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [isDrawned, setIsDrawned] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsDrawned(true);
  };

  return (
    <>
      <Header />
      <main className="bg-white w-full max-w-[1440px] flex-grow pt-4 m-0 mx-auto border-x-gray shadow-container">
        <div className="flex flex-col gap-4 p-4 border-t border-[#EBEBEB]">
          <h1 className="text-brown text-4xl font-bold">Sortee en Sortea2</h1>
          <div className="flex gap-8">
            <div className="w-1/2 flex flex-col gap-4">
              <p className="text-brown text-xl font-bold">
                Escribe los participantes del sorteo:
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Lista de participantes:</p>
                <textarea className="w-full h-56 p-3 rounded border border-light-gray transition duration-150 ease-in-out focus:border-blue focus:shadow-input"></textarea>
                <span>Debe tener como mínimo dos participantes.</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Nº de premios:</p>
                <input
                  className="w-full px-3 py-2 rounded border border-light-gray transition duration-150 ease-in-out focus:border-blue focus:shadow-input"
                  defaultValue={2}
                  readOnly
                />
              </div>
              <div className="flex gap-1">
                <button
                  className="text-white bg-blue px-4 py-3 rounded-md border border-light-blue hover:bg-[#286090] hover:border-[#55A6C1]"
                  onClick={handleSubmit}
                >
                  ¡Sortear!
                </button>
                <button className="text-dark bg-white px-4 py-3 rounded-md border border-light-gray hover:bg-[#e6e6e6] hover:border-[#adadad]">
                  Borrar nombres
                </button>
              </div>
            </div>
            <div className="w-1/2">
              {isDrawned ? (
                <div className="flex flex-col gap-8">
                  <div className="bg-[#E3F2F7] flex flex-col gap-3 p-4 border border-blue">
                    <h2 className="text-brown text-2xl font-semibold">
                      Resultados del sorteo
                    </h2>
                    <ul>
                      <li>
                        <span className="font-bold">Puesto 1:</span> Alonso RD
                      </li>
                      <li>
                        <span className="font-bold">Puesto 2:</span> danna BD
                      </li>
                    </ul>
                  </div>
                  <ul className="flex items-center gap-1">
                    <li>
                      <button className="text-sm px-3 py-2 border border-light-gray rounded hover:bg-[#e6e6e6] hover:border-[#adadad]">
                        Nuevo sorteo
                      </button>
                    </li>
                    <li>
                      <button className="text-sm px-3 py-2 border border-light-gray rounded hover:bg-[#e6e6e6] hover:border-[#adadad]">
                        Guardar resultados
                      </button>
                    </li>
                    <li>
                      <button className="text-sm flex items-center gap-2 px-3 py-2 border border-light-gray rounded hover:bg-[#e6e6e6] hover:border-[#adadad]">
                        <Image
                          src="/facebook.png"
                          width={16}
                          height={16}
                          alt="Publicar en Facebook."
                        />
                        Publicar en Facebook
                      </button>
                    </li>
                    <li>
                      <button className="text-sm flex items-center gap-2 px-3 py-2 border border-light-gray rounded hover:bg-[#e6e6e6] hover:border-[#adadad]">
                        <Image
                          src="/whatsapp.png"
                          width={16}
                          height={16}
                          alt="Comparte en Whatsapp."
                        />
                        Comparte en Whatsapp
                      </button>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-brown text-2xl font-semibold">
                      Comparte como imagen
                    </h2>
                    <p>
                      Guarda los resultados en una imagen y podrás insertarla en
                      cualquier Red Social.
                    </p>
                    <p className="flex items-center gap-1">
                      <Image
                        src="/download.svg"
                        width={16}
                        height={16}
                        alt="Guardar Imagen del resultado del sorteo."
                      />
                      <a className="text-[#2158AF] cursor-pointer hover:text-[#23527c] hover:underline">
                        Guardar Imagen del resultado del sorteo.
                      </a>
                    </p>
                    <p className="text-[#737373]">
                      Copia y pega este código en tu web
                    </p>
                  </div>
                </div>
              ) : (
                <ul className="flex flex-col gap-3">
                  <li className="flex flex-col gap-3">
                    <h3 className="text-brown text-2xl font-semibold">
                      Sorteo certificado
                    </h3>
                    <p>
                      Si quieres hacer un sorteo con las máximas garantías de
                      transparencia y legalidad para todos los participantes.
                      Cuesta 2.99€.{" "}
                      <a className="text-[#2158AF] cursor-pointer hover:underline hover:text-[#23527c]">
                        Sorteos certificados
                      </a>
                    </p>
                  </li>
                  <li className="flex flex-col gap-3">
                    <h3 className="text-brown text-2xl font-semibold">
                      Sorteos avanzados
                    </h3>
                    <p>
                      Si quieres hacer un sorteo con las máximas garantías de
                      transparencia y legalidad para todos los participantes.
                      Cuesta 2.99€.{" "}
                      <a className="text-[#2158AF] cursor-pointer hover:underline hover:text-[#23527c]">
                        Sorteos certificados
                      </a>
                    </p>
                  </li>
                  <li className="flex flex-col gap-3">
                    <h3 className="text-brown text-2xl font-semibold">
                      Sortear números
                    </h3>
                    <p>
                      Si quieres sortear números para tener un listado de
                      números al azar que cumplan unas propiedades, aquí tienes
                      esta utilidad específica para{" "}
                      <a className="text-[#2158AF] cursor-pointer hover:underline hover:text-[#23527c]">
                        sortear números.
                      </a>
                    </p>
                  </li>
                  <li className="flex flex-col gap-3">
                    <h3 className="text-brown text-2xl font-semibold">
                      Sortear grupos
                    </h3>
                    <p>
                      Si quieres sortear equipos o agrupar participantes en
                      grupos, aquí tienes esta utilidad específica para{" "}
                      <a className="text-[#2158AF] cursor-pointer hover:underline hover:text-[#23527c]">
                        sortear equipos.
                      </a>
                    </p>
                  </li>
                  <li className="flex flex-col gap-3">
                    <h3 className="text-brown text-2xl font-semibold">
                      Respuestas aleatorias
                    </h3>
                    <p>
                      Hemos creado un sistema que{" "}
                      <a className="text-[#2158AF] cursor-pointer hover:underline hover:text-[#23527c]">
                        responde aleatoriamente
                      </a>{" "}
                      cualquier pregunta. ¡Anímate a probarlo!
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
