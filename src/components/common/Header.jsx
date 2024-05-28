
import logoBlanco from "../../assets/logos/logoBlanco.png";
import { DarkMode } from "../../assets/icons/DarkMode.jsx";
import { MenuMobile } from "../../assets/icons/MenuMobile.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//Este componente contiene la barra de navegación

export const Header = () => {
  //Funcion para cambio de color de la barra de navegación al hacer scroll
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener(scroll, handleScroll);
  }, []);

  return (
    <header
      className={`w-full mx-auto justify-center h-[70px] fixed z-20 flex place-content-between items-center transition-all duration-700 ${
        scrolled ? "bg-blue " : ""
      }`}
    >
    <div className="xl:w-60 px-3 hidden xl:flex">
        
        <Link to="/">
        <img src={logoBlanco} alt="Logo principal Blanco" />
        </Link>

        <Link to="">
        
        </Link>


      </div>

      <ul className=" font-abc2 text-white text-[14px] xl:h-[34px] xl:w-[600px] hidden xl:flex xl:mx-24 xl:text-[15px] xl:items-center xl:place-content-around xl:justify-aroun">
        
      <Link to="/soluciones">        <li className="hover:text-lightBlue hover:underline underline-offset-8 ">
          <a href="#">Soluciones</a>
        </li>
        </Link>

        <Link to="/nosotros">
        <li className="hover:text-lightBlue hover:underline underline-offset-8">
          <a href="#">Nosotros</a>
        </li>
        </Link>

        <Link to="/insigths">
        <li className="hover:text-lightBlue hover:underline underline-offset-8">
          <a href="#">Insigths</a>
        </li>
        </Link>
        
        <Link to="/contacto">
        <li className="hover:text-lightBlue hover:underline underline-offset-8">
          <a href="#">Contacto</a>
        </li>
        </Link>
      </ul>
      <span className="xl:h-[34px] xl:w-[70px] hidden xl:items-center xl:flex xl:place-content-around xl:justify-around">
        <DarkMode />
      </span>

      <span className=" w-full h-[74px] px-3 pt-2 flex items-center place-content-around justify-between xl:hidden">
        <img
          className="w-[210px] sm:w-[260px] "
          src={logoBlanco}
          alt="Logo principal"
        />
        <MenuMobile />
      </span>
    </header>
  );
};
