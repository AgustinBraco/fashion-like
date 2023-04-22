import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="section-contact">
      <div>
        <span className="contact-title">Contrata </span>
        <span className="contact-title-lblue">charlas y talleres </span>
        <p className="contact-title">para tu empresa o universidad</p>
      </div>

      <div className="contact-text-container">
        <p className="contact-text">Contáctame si estás interesado/a en organizar un taller o una charla. También me puedes contactar si quieres tener acceso a consultorías personalizadas sobre marca personal.</p>
        <p className="contact-text">Temas: seguridad psicológica, manejo de expectativas, autoconocimiento, gestión de la incertidumbre, éxito en entrevistas, productividad, marca personal, y ¡mucho más!</p>
      </div>

      <Link to={"https://www.linkedin.com/in/agust%C3%ADn-braco/"} target="blank" className="contact-link">Contáctame</Link>
    </section>
  );
};

export default Contact;