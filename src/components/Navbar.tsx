import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace o fuera del menú
  const closeMenu = () => setIsMenuOpen(false);

  // Cierra el menú si se hace scroll
  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
            Dev<span className="text-blue-400/80 dark:text-blue-500/80">Portfolio</span>
          </a>

          {/* Menú en escritorio */}
          <div className="nav-links hidden md:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          {/* Botón de menú hamburguesa en móvil */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav-icon-button">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Fondo oscuro cuando el menú está abierto */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Menú móvil animado */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="mobile-menu md:hidden"
      >
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="nav-link" onClick={closeMenu}>
            {item.name}
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default Navbar;
