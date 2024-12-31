import { useState } from "react";
import "./MenuMobile.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MenuMobile() {
  const [menuMobile, setMenuMobile] = useState(false);

  const toggleMenu = () => {
    setMenuMobile(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuMobile(false);
  };

  return (
    <section className={`container-mobile ${menuMobile ? "menu-active" : ""}`}>
      <div className="container-layout">
        <button 
          onClick={toggleMenu} 
          className="menu-toggle" 
          aria-label={menuMobile ? "Fechar menu" : "Abrir menu"}
        >
          {menuMobile ? <FaTimes /> : <FaBars />}
        </button>
        {menuMobile && (
          <nav className="mobile-navbar">
            <ul>
              <li onClick={closeMenu}>
                <a href="#home">Início</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#about">Sobre Mim</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#projects">Projetos</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
