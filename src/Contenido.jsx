import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Principal } from "./components/Principal";
import { Peliculas } from "./components/Peliculas";
import { Cartelera } from "./components/Cartelera";
import { Sabores } from "./components/Sabores";

function Contenido(props) {
  return (
    <div>
      <nav>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
          <div className="w-full max-w-5xl p-4">
            <div className="overflow-x-auto w-full rounded-2xl shadow-2xl ring-1 ring-primary">
              <table className="table w-full border border-base-300 backdrop-blur-md bg-opacity-80 bg-base-100">
                <tbody>

                  <tr className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white text-3xl font-extrabold tracking-wide text-center">
                    <td colSpan={2} className="py-6 rounded-t-2xl">
                      🎬 Cinemateca Boliviana
                    </td>
                  </tr>

                  {/* Fila 2: Menú Futurista */}
                  <tr className="bg-base-300 text-center">
                    <td colSpan={2} className="py-6">
                      <ul className="flex justify-center gap-10">
                        <li>
                          <Link
                            to="/pag1"
                            className="relative px-6 py-2 font-bold text-cyan-300 transition duration-300 ease-in-out border-2 border-cyan-500 rounded-full shadow-md hover:shadow-cyan-500/50 hover:bg-cyan-800/20 hover:text-white"
                          >
                            <span className="absolute inset-0 rounded-full blur-md bg-cyan-500 opacity-10 hover:opacity-20 transition"></span>
                            Principal
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/pag2"
                            className="relative px-6 py-2 font-bold text-purple-300 transition duration-300 ease-in-out border-2 border-purple-500 rounded-full shadow-md hover:shadow-purple-500/50 hover:bg-purple-800/20 hover:text-white"
                          >
                            <span className="absolute inset-0 rounded-full blur-md bg-purple-500 opacity-10 hover:opacity-20 transition"></span>
                            Películas
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>


                  {/* Fila 3: Contenido */}
                  <tr>
                    <td colSpan={2} className="p-10 text-center bg-gray-900 text-lg">
                      <div className="border border-dashed border-cyan-400 p-6 rounded-xl shadow-inner">
                        <div>
                          <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in bg-gradient-to-b from-black/80 via-gray-900/70 to-black/90 p-10 rounded-xl shadow-2xl">

                            {/* Encabezado */}
                            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-wide drop-shadow-lg text-center">
                              📽️ Explora el Mundo del Cine
                            </div>

                            {/* Descripción */}
                            <div className="max-w-2xl text-gray-300 text-base sm:text-lg text-center leading-relaxed">
                              Desde clásicos inolvidables hasta estrenos que desafían tu imaginación, nuestra cinemateca es tu entrada a un universo de emociones visuales.
                            </div>

                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                              <button className="btn btn-accent btn-wide hover:scale-105 transition shadow-lg">
                                <Link
                                  to="/pag3">
                                  🎟️ Ver Cartelera
                                </Link>
                              </button>
                              <button className="btn btn-info btn-wide hover:scale-105 transition shadow-lg">
                                <Link to="/pag4">
                                  🎬 Sabores en Cartelera
                                </Link>
                              </button>
                            </div>

                            {/* Línea divisoria */}
                            <div className="mt-10 w-3/4 border-t border-cyan-500/40"></div>

                            {/* Footer breve */}
                            <div className="flex flex-col items-center text-center">
                              <span className="text-sm text-gray-400 tracking-wide">🎬 Disfruta de una experiencia cinematográfica con nosotros.</span>
                              <span className="text-xs text-gray-500 italic mt-1">✨ Proyecto Final de Web 2 </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Fila 4: Info Final */}
                  <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-center font-light text-sm tracking-wide text-gray-400">
                    <td className="p-3">Desarrollado por: <span className="text-white font-medium">Jordy A. Rodríguez Chacón</span></td>
                    <td className="p-3">Publicidad: <span className="text-white font-medium">Programacion Web 2</span></td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </nav>
      <div className="Contenido">
        <Routes >
          <Route path="/pag1" element={<Principal></Principal>}></Route>
          <Route path="/pag2" element={<Peliculas></Peliculas>}></Route>
          <Route path="/pag3" element={<Cartelera></Cartelera>}></Route>
          <Route path="/pag4" element={<Sabores></Sabores>}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default Contenido;