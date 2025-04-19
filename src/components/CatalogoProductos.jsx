// components/CatalogoProductos.jsx
import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const productos = [
  { title: "Huevo", price: 1500, image: "src/assets/logo.png", type: "Huevo" },
  {
    title: "Huevos",
    price: 2000,
    image: "src/assets/logo.png",
    type: "Huevos",
  },
  {
    title: "Detergente MultiAccion",
    price: 1500,
    image: "src/assets/logo.png",
    type: "Aseo",
  },
  {
    title: "Detergente Ro",
    price: 1500,
    image: "src/assets/logo.png",
    type: "Aseo",
  },
  {
    title: "Paltas",
    price: 1500,
    image: "src/assets/logo.png",
    type: "Alimentos",
  },
  // Agrega más productos si quieres...
];

const categorias = ["Todos", "Alimentos", "Aseo", "Huevos"];

const CatalogoProductos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.type === categoriaSeleccionada);

  return (
    <section id="Catalogo" className="py-16 px-4 bg-white">
      <div className="flex flex-wrap gap-2 mb-6">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`px-4 py-2 rounded-full border ${
              categoriaSeleccionada === cat
                ? "bg-black text-white"
                : "bg-white text-black border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productosFiltrados.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default CatalogoProductos;
