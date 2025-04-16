const products = [
  { name: "Alimentos", color: "bg-purple-300" },
  { name: "Bebidas", color: "bg-blue-300" },
  { name: "Huevos", color: "bg-purple-300" },
  { name: "Aseo", color: "bg-blue-300" },
];

const ProductsSection = () => (
  <section id="productos" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-10">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className={`${item.color} rounded-lg p-6 shadow hover:scale-105 transition-transform`}
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
