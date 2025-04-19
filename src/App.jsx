import React, { useEffect } from "react";
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductosPage from "./pages/ProductosPage";

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductosPage" element={<ProductosPage />} />
      </Routes>
    </>
  );
};

export default App;
