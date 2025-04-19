import React, { useState } from "react";
import { FaHome, FaBoxOpen, FaUsers, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Almacén Nombre</h1>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <NavLink href="#inicio" icon={<FaHome />} label="Inicio" />
          <NavLink href="#productos" icon={<FaBoxOpen />} label="Productos" />
          <NavLink href="#nosotros" icon={<FaUsers />} label="Nosotros" />
          <NavLink href="#contacto" icon={<FaEnvelope />} label="Contacto" />
        </nav>

        {/* Botón hamburguesa (solo visible en móvil) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-4 text-sm">
          <NavLink href="#inicio" icon={<FaHome />} label="Inicio" />
          <NavLink href="#productos" icon={<FaBoxOpen />} label="Productos" />
          <NavLink href="#nosotros" icon={<FaUsers />} label="Nosotros" />
          <NavLink href="#contacto" icon={<FaEnvelope />} label="Contacto" />
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-white font-bold hover:text-blue-600 flex items-center gap-2"
  >
    {icon}
    {label}
  </a>
);

export default Header;
