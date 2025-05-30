import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import "../styles/Hero.css";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header id="home" className="hero">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="hero-title">
            ¡Hola! Soy <span className="text-blue-500">Desarrollador Full - Stack</span>
          </h1>
          <p className="hero-subtitle">
            Construyo aplicaciones modernas con React y Node.js.
          </p>
        </motion.div>

        <nav className="hero-socials">
          {[
            { icon: <Github className="h-5 w-5" />, href: "https://github.com/Arturo0109", label: "GitHub" },
            { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/juanarturodev/", label: "LinkedIn" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.3 },
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-buttons"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition"
          >
            Ver Proyectos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Contáctame
          </motion.a>
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </header>
  );
};

export default Hero;
