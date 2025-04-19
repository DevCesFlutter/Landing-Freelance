import React from "react";

const Servicios = () => {
  return (
    <section id="servicios" className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex-1 p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-7xl **:font-semibold mb-4 text-center">
              Entrega Rápida
            </h3>
            <p className="text-center">
              Recibe tus productos en tiempo récord, garantizando calidad y
              velocidad.
            </p>
          </div>
          <div className="flex-1 p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Ofertas Exclusivas
            </h3>
            <p className="text-center">
              Aprovecha descuentos y promociones diseñadas para optimizar tus
              compras.
            </p>
          </div>
          <div className="flex-1 p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Asesoría Personalizada
            </h3>
            <p className="text-center">
              Nuestro equipo te brinda soporte experto para maximizar tus
              beneficios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
