import React from "react";
import HeaderProd from "../components/HeaderProd";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CatalogoProductos from "../components/CatalogoProductos";
import Ofertas from "../components/Ofertas";

const ProductosPage = () => {
  return (
    <>
      <HeaderProd />
      <main className="font-sans text-gray-800 scroll-smooth">
        <br />
        <Ofertas />
        <CatalogoProductos />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ProductosPage;
