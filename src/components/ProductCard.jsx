// components/ProductCard.jsx
const ProductCard = ({ title, price, image }) => (
  <div className="border rounded-xl p-4 shadow hover:shadow-lg transition duration-300">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">${price}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Comprar
    </button>
  </div>
);

export default ProductCard;
