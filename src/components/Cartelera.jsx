export function Cartelera(props) {
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