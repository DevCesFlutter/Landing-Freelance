import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ProductosPage");
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            onClick={handleClick}
            className="bg-purple-300 rounded-lg p-6 shadow hover:scale-105 transition-transform cursor-pointer"
          >
            <h3 className="text-lg font-semibold">Alimentos</h3>
          </div>
          <div
            onClick={handleClick}
            className="bg-green-300 rounded-lg p-6 shadow hover:scale-105 transition-transform cursor-pointer"
          >
            <h3 className="text-lg font-semibold">Utiles de aseo</h3>
          </div>
          <div
            onClick={handleClick}
            className="bg-red-300 rounded-lg p-6 shadow hover:scale-105 transition-transform cursor-pointer"
          >
            <h3 className="text-lg font-semibold">Huevos</h3>
          </div>
          <div
            onClick={handleClick}
            className="bg-blue-300 rounded-lg p-6 shadow hover:scale-105 transition-transform cursor-pointer"
          >
            <h3 className="text-lg font-semibold">Bebidas</h3>
          </div>

          {/* Agrega más elementos según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
