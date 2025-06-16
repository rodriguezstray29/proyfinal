import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Principal(props) {
  const actores = [
    {
      nombre: "Keanu Reeves",
      imagen: "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      nombre: "Cillian Murphy",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbs17FPUDw8vkaftxYy6aBg7xP0tM6lLhmQ&s",
    },
    {
      nombre: "Margot Robbie",
      imagen: "https://media.vogue.es/photos/67345ab813cd0f13f06dd1d0/2:3/w_2560%2Cc_limit/GettyImages-1252512552.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white p-10">

      {/* Título Futurista */}
      <div className="text-center text-4xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-xl mb-12">
        🎥 Bienvenidos a la Pagina Principal
      </div>

      {/* Cartillas de Actores */}
      <div className="flex flex-wrap justify-center gap-10">
        {actores.map((actor, index) => (
          <div
            key={index}
            className="card w-60 bg-gray-900 border border-cyan-600 shadow-xl transition-transform hover:scale-105"
          >
            <figure>
              <img src={actor.imagen} alt={actor.nombre} className="w-full h-80 object-cover" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-white font-semibold text-lg">{actor.nombre}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Peliculas(props) {
  const peliculas = [
    {
      id: "endgame",
      titulo: "Avengers: Endgame",
      resumen: "Tras los devastadores eventos de Infinity War, los Vengadores restantes se reúnen para ejecutar un audaz plan que los lleva a viajar en el tiempo y recuperar las Gemas del Infinito. Con nuevos aliados, dolorosas pérdidas y un épico enfrentamiento final, el destino del universo entero está en juego.",
      año: 2019,
      calificacion: "PG‑13",
      imagen: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
    },
    {
      id: "worldwarz",
      titulo: "Guerra Mundial Z",
      resumen: "Gerry Lane, un exinvestigador de la ONU, se embarca en una carrera contrarreloj por todo el mundo para investigar el origen de un brote zombi global. Con ciudades cayendo, gobiernos colapsando y la humanidad al borde de la extinción, su única esperanza es encontrar una solución antes de que sea demasiado tarde.",
      año: 2013,
      calificacion: "PG‑13",
      imagen: "https://avatars.mds.yandex.net/i?id=e946b8d3f9beb024bb42e06fe312b8bb3dde8515-4546116-images-thumbs&n=13"
    },
    {
      id: "readyplayerone",
      titulo: "Ready Player One",
      resumen: "En el año 2045, el mundo real está al borde del colapso y la gente escapa hacia OASIS, una realidad virtual creada por un excéntrico genio. Cuando este muere, lanza una competencia mundial para heredar su fortuna. Wade Watts, un joven fanático, se une a la búsqueda enfrentando retos, enemigos y descubriendo el valor de la realidad.",
      año: 2018,
      calificacion: "PG‑13",
      imagen: "https://avatars.mds.yandex.net/i?id=bae72e3ac524e2ad4f28a07b1b5bbe234af7d7a5-6556603-images-thumbs&n=13"
    },
    {
      id: "johnwick3",
      titulo: "John Wick 3",
      resumen: "John Wick es declarado excomulgado y con una recompensa multimillonaria sobre su cabeza. Sin aliados y perseguido por asesinos de élite, debe luchar para sobrevivir mientras intenta encontrar una forma de redención dentro del violento mundo de asesinos al que pertenece.",
      año: 2019,
      calificacion: "R",
      imagen: "https://avatars.mds.yandex.net/i?id=4d1e680c64aa6930f9fefa92544ef6a3-5579007-images-thumbs&n=13"
    },
    {
      id: "alienromulus",
      titulo: "Alien: Romulus",
      resumen: "En una colonia espacial remota, un grupo de jóvenes trabajadores se ve atrapado en una estación abandonada donde descubren que no están solos. Al enfrentarse a una nueva variante del mortífero xenomorfo, su lucha por sobrevivir revela secretos oscuros y horrores más allá de su comprensión.",
      año: 2024,
      calificacion: "R",
      imagen: "https://avatars.mds.yandex.net/i?id=af83958e50d425bac259146bc38e9f9b283d4289-4889316-images-thumbs&n=13"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white p-10">
      {/* Título Futurista */}
      <div className="text-center text-4xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 drop-shadow-xl mb-10">
        🎞️ Películas Disponibles
      </div>

      {/* Botones con Modales */}
      <div className="flex flex-col items-center gap-6">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="text-center">
            <button
              className="btn btn-outline btn-accent rounded-full px-6 py-3 hover:scale-105 transition-all shadow-lg"
              onClick={() => document.getElementById(pelicula.id).showModal()}
            >
              {pelicula.titulo}
            </button>

            {/* Modal */}
            <dialog id={pelicula.id} className="modal">
              <div className="modal-box bg-gray-900 text-white shadow-2xl border border-cyan-600">
                <h3 className="font-bold text-xl text-cyan-400">{pelicula.titulo}</h3>
                <p className="italic text-gray-300 mb-4">Resumen de película</p>
                <img
                  src={pelicula.imagen}
                  alt={pelicula.titulo}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <p className="mb-4">{pelicula.resumen}</p>
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>📅 Año: {pelicula.año}</span>
                  <span>🔞 Calificación: {pelicula.calificacion}</span>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm btn-outline btn-error">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cartelera(props) {
  return (
    <div className="mt-16 w-full max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">🎞️ Cartelera Actual</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            titulo: "Duna: Parte Dos",
            img: "https://avatars.mds.yandex.net/i?id=5f923f33eba118b8e7feead4f57df90ec7d9e9f0-5345995-images-thumbs&n=13"
          },
          {
            titulo: "Godzilla x Kong",
            img: "https://avatars.mds.yandex.net/i?id=5cbbf4ae976128d2347876c1bbf68b37d47c2551-5234049-images-thumbs&n=13"
          },
          {
            titulo: "Garfield: La película",
            img: "https://avatars.mds.yandex.net/i?id=5c3fcb5baa5e77e8e66e592b17727b584c5eafdf-9747317-images-thumbs&n=13"
          }
        ].map((peli, i) => (
          <div key={i} className="card bg-gray-900 border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition">
            <figure>
              <img src={peli.img} alt={peli.titulo} className="h-72 w-full object-cover" />
            </figure>
            <div className="card-body text-center">
              <h2 className="font-semibold text-white text-lg">{peli.titulo}</h2>
              <button className="btn btn-accent btn-sm mt-2">Comprar Entradas</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
function Sabores(props) {
  return (
    <div className="mt-20 w-full max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-lime-400 mb-6 text-center">🍕 Platos Destacados</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            nombre: "Ramen Galáctico",
            descripcion: "Un tazón cósmico de fideos con caldo de miso y estrellas de tofu.",
            img: "https://avatars.mds.yandex.net/i?id=8a252ea4dc6b80665d4c5b710133f32a7c06f02e-4576286-images-thumbs&n=13"
          },
          {
            nombre: "Burger Nebulosa",
            descripcion: "Doble carne, queso interestelar y pan de tinta de calamar.",
            img: "https://thumbs.dreamstime.com/b/estaci%C3%B3n-espacial-de-hamburguesa-en-espacio-nebulosa-fondo-ai-generativo-burger-el-nebula-arte-creado-por-la-imagen-tecnolog%C3%ADa-277038824.jpg"
          },
          {
            nombre: "Pizza del Futuro",
            descripcion: "Base crocante con toppings bioluminiscentes y pepperoni en 3D.",
            img: "https://avatars.mds.yandex.net/i?id=3b95cd783e7bc5363c818ec89d303fc02ece88b7-5233781-images-thumbs&n=13"
          }
        ].map((plato, i) => (
          <div key={i} className="card bg-gray-900 border border-lime-600 shadow-lg hover:shadow-lime-400/30 transition">
            <figure>
              <img src={plato.img} alt={plato.nombre} className="h-72 w-full object-cover" />
            </figure>
            <div className="card-body text-center">
              <h2 className="font-semibold text-white text-lg">{plato.nombre}</h2>
              <p className="text-sm text-gray-400 mt-1">{plato.descripcion}</p>
              <button className="btn btn-outline btn-success btn-sm mt-3">Ver Receta</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

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
                          <a
                            href="/pag1"
                            className="relative px-6 py-2 font-bold text-cyan-300 transition duration-300 ease-in-out border-2 border-cyan-500 rounded-full shadow-md hover:shadow-cyan-500/50 hover:bg-cyan-800/20 hover:text-white"
                          >
                            <span className="absolute inset-0 rounded-full blur-md bg-cyan-500 opacity-10 hover:opacity-20 transition"></span>
                            Principal
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pag2"
                            className="relative px-6 py-2 font-bold text-purple-300 transition duration-300 ease-in-out border-2 border-purple-500 rounded-full shadow-md hover:shadow-purple-500/50 hover:bg-purple-800/20 hover:text-white"
                          >
                            <span className="absolute inset-0 rounded-full blur-md bg-purple-500 opacity-10 hover:opacity-20 transition"></span>
                            Películas
                          </a>
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
                                <a href="/pag3">
                                  🎟️ Ver Cartelera
                                </a>
                              </button>
                              <button className="btn btn-info btn-wide hover:scale-105 transition shadow-lg">
                                <a href="/pag4">
                                  🎬 Sabores en Cartelera
                                </a>
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