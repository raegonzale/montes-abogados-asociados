import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoBlanco from "../../assets/logos/logoBlanco.png";
import logo from "../../assets/logos/logo.png";
import DarkModeButton from "./DarkModeButton.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { MenuMobile } from "../../assets/icons/MenuMobile.jsx";
import { MenuMobileBlue } from "../../assets/icons/MenuMobileBlue.jsx";
import useTheme from "../../constants/useTheme.js";

export const Header = ({ variant = "overlay" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, darkMode } = useTheme();
  const solid = variant === "solid" || scrolled;

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const logoSrc = darkMode || !solid ? logoBlanco : logo;
  const MobileMenuIcon = darkMode || !solid ? MenuMobile : MenuMobileBlue;

  return (
    <header
      style={{
        backgroundColor: solid ? theme.background : "transparent",
        color: solid ? theme.textPrimary : "white",
      }}
      className={`w-full mx-auto justify-center h-[70px] fixed z-20 flex place-content-between items-center transition-all duration-500 ${scrolled ? "bg-white shadow-lg" : ""}`}
    >
      <div className="xl:w-44 hidden xl:flex">
        <Link to="/">
          <img src={logoSrc} alt="Montes Abogados Asociados" />
        </Link>
      </div>
      <nav aria-label="Navegación principal" className="hidden xl:block xl:mx-40">
        <ul className="flex h-[34px] w-[500px] items-center justify-around font-abc2 text-[15px] font-bold">
          <li><Link className="hover:underline underline-offset-8" to="/soluciones">Soluciones</Link></li>
          <li><Link className="hover:underline underline-offset-8" to="/nosotros">Nosotros</Link></li>
          <li><Link className="hover:underline underline-offset-8" to="/insigths">Blog</Link></li>
          <li><Link className="hover:underline underline-offset-8" to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className="hidden xl:flex">
        <DarkModeButton />
      </div>
      <div className="w-full h-[74px] px-6 py-1 flex items-center justify-between place-content-around xl:hidden">
        <Link to="/">
          <img className="w-[160px]" src={logoSrc} alt="Montes Abogados Asociados" />
        </Link>
        <MobileMenu
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          Icon={MobileMenuIcon}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(["overlay", "solid"]),
};

export default Header;
