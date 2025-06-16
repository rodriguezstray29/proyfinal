export function Principal(props) {
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