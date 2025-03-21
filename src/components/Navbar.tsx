import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="text-xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
            Juan <span className="text-blue-400/80 dark:text-blue-500/80">ArturDev</span>
          </a>

          <div className="nav-links hidden md:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav-icon-button">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

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
