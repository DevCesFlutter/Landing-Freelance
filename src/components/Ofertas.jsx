const Ofertas = () => (
  <section
    id="inicio"
    className="pt-28 pb-20 bg-gradient-to-r from-black to-gray-900 text-white"
  >
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Texto */}
      <div className="flex-1 text-center md:text-left animate-fade-in">
        <h2 className="text-4xl font-extrabold mb-4">🎉 Zona de Ofertas</h2>
        <p className="text-lg mb-6 text-gray-300">
          Alimentos, bebidas, huevos y útiles de aseo directo a tu negocio con
          los mejores precios.
        </p>
        <a
          href="#productos"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
        >
          Ver Ofertas
        </a>
      </div>

      {/* Imagen */}
      <div className="flex-1">
        <img
          src="src/assets/logo.png"
          alt="Productos distribuidora"
          className="w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </section>
);

export default Ofertas;
