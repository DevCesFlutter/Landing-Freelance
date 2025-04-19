import { useNavigate } from "react-router-dom";

const HeaderProd = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section>
      <header className="bg-black shadow fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1
            className="text-xl font-bold text-white  hover:text-blue-700"
            onClick={handleClick}
          >
            Almacén Nombre
          </h1>
        </div>
      </header>
    </section>
  );
};

export default HeaderProd;
