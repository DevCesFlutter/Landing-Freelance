import React, { useState } from "react";
import { FaHome, FaBoxOpen, FaUsers, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Almacén Nombre</h1>

        <nav className="text-sm hidden md:flex space-x-6">
          <a
            href="#inicio"
            className="text-white font-bold hover:text-blue-600 flex items-center gap-2"
          >
            <FaHome />
            Inicio
          </a>
          <a
            href="#productos"
            className="text-white font-bold hover:text-blue-600 flex items-center gap-2"
          >
            <FaBoxOpen />
            Productos
          </a>
          <a
            href="#nosotros"
            className="text-white font-bold hover:text-blue-600 flex items-center gap-2"
          >
            <FaUsers />
            Nosotros
          </a>
          <a
            href="#contacto"
            className="text-white font-bold hover:text-blue-600 flex items-center gap-2"
          >
            <FaEnvelope />
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
