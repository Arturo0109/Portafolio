import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.figure
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-image-container"
        >
            <motion.div
            className="about-image"
            whileHover={{ scale: 1.02 }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 0px 20px rgba(59, 130, 246, 0.5)",
                "0px 0px 0px rgba(0,0,0,0)",
              ],
            }}
          >
            <img
              src="/foto.jpg"
              alt="Foto de perfil del desarrollador"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <figcaption className="text-center mt-2 text-sm text-gray-500">
            Desarrollador Full Stack | React | Tailwind
          </figcaption>
        </motion.figure>

        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <header>
            <h2 className="about-title">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-blue-500"
              >
                Sobre Mí
              </motion.span>
            </h2>
            <motion.div
              className="about-divider"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
            />
          </header>

          <p className="about-text">
          Soy un programador con formación en Tecnología en Desarrollo de Software. 
          He trabajado en proyectos, desarrollando habilidades en desarrollo web 
          (HTML, CSS, JavaScript, React, Node.js) y gestión de bases de datos (SQL, NoSQL). </p>

          <p className="about-text">
          Busco seguir creciendo en el campo del desarrollo de software, aportando en proyectos innovadores y desafiantes.
          Me encanta crear experiencias de usuario fluidas y atractivas con código optimizado.
          </p>

          <motion.div
            className="about-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="about-button"
              >
                Contáctame
              </motion.button>
            </a>
            <a href="\Hoja de Vida CV Programador.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="about-outline-button flex items-center gap-2"
              >
                📄 Descargar CV
              </motion.button>
            </a>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
};

export default About;
