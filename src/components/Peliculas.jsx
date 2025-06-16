export function Peliculas(props) {
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