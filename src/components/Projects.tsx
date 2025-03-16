import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "../styles/Projects.css";
import  "../image/ecomerce.png";


const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Una tienda en línea con catálogo de productos, carrito de compras, autenticación y pagos.",
    image: "image/ecomerce.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    demoLink: "https://example.com",
    repoLink: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "Aplicación para gestión de tareas en equipo con actualizaciones en tiempo real.",
    image: "/placeholder.jpg",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
    demoLink: "https://example.com",
    repoLink: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="projects-title">Proyectos Destacados</h2>
          <p className="projects-subtitle">
            Algunos de los proyectos en los que he trabajado recientemente.
          </p>
        </div>

        {/* Grid de proyectos */}
        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="project-buttons">
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button-outline flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </motion.a>

                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Botón de ver más */}
        <motion.div
          className="projects-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button-outline flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4" />
            Ver Más Proyectos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
