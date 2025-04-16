const HeroSection = () => (
  <section id="inicio" className="pt-28 pb-20 bg-blue-200">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Distribuidora de Confianza</h2>
        <p className="text-lg text-black">
          Alimentos, bebidas, huevos y útiles de aseo directo a tu negocio.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="src\assets\logo.png"
          alt="Productos distribuidora"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
