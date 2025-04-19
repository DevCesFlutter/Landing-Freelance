import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="font-sans text-gray-800 scroll-smooth">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
