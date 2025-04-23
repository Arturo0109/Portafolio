import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: HandleChangeEvent): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/movdqywa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); 
        setTimeout(() => setSubmitted(false), 3000); 
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 3000); 
    }
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
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu Mensaje"
          className="contact-input"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Enviar
        </button>

        {submitted && <p className="contact-success">¡Mensaje enviado con éxito! ✅</p>}
        {error && <p className="contact-error">Ha ocurrido un error al enviar el mensaje. ❌</p>}
      </motion.form>
    </section>
  );
};

export default Contact;