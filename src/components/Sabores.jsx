export function Sabores(props) {
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
