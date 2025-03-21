import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
        

        <div className="footer-icons">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
