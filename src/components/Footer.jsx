const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="mb-2 md:mb-0">
        &copy; 2025 Almacén. Todos los derechos reservados.
      </p>
      <div className="flex gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
