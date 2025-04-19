// components/ProductCard.jsx
const ProductCard = ({ title, price, image }) => (
  <div className="border-2 border-gray-300 rounded-2xl p-5 shadow-md hover:shadow-2xl transition duration-300 bg-white">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-lg font-semibold text-green-600">${price}</p>
  </div>
);

export default ProductCard;
