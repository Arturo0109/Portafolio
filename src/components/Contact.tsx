import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Mensaje de éxito por 3 segundos
    setFormData({ name: "", email: "", message: "" }); // Reseteamos el formulario
  };

  return (
    <section id="contact" className="contact">
      <h2 className="text-4xl font-bold text-center mb-6">Contacto</h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          className="contact-input"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Tu Mensaje"
          className="contact-input"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact-button">
          Enviar
        </button>

        {submitted && <p className="contact-success">¡Mensaje enviado con éxito! ✅</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
