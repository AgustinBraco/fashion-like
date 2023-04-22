import { Link } from "react-router-dom";

function Content() {
  return (
    <section className="section-content">
      <div className="content-texts-container">
        <h3 className="content-h3">Temáticas sobre las cuales me gusta crear contenido</h3>
        <p className="content-p">Mi objetivo es ayudarte a crear la vida que quieres para ti mismo.</p>
      </div>

      <div className="content-card-container">
        <div className="content-card">
          <img src="assets/icons/icon-rocket.gif" alt="icon-rocket" className="content-icon"/>
          <h4 className="content-card-h4">Marca personal</h4>
          <p className="content-card-p">Cómo ser fiel a ti mismo, reforzar tu esencia y darte a conocer.</p>
        </div>

        <div className="content-card">
          <img src="assets/icons/icon-person.gif" alt="icon-person" className="content-icon"/>
          <h4 className="content-card-h4">Desarrollo personal</h4>
          <p className="content-card-p">Cómo conocerte mejor, maximizar tus habilidades y lograr destacar frente a los demás.</p>
        </div>

        <div className="content-card">
          <img src="assets/icons/icon-leader.gif" alt="icon-leader" className="content-icon"/>
          <h4 className="content-card-h4">Liderazgo</h4>
          <p className="content-card-p">Cómo convertirte en un líder más humano y auténtico, sin dejar de lado los resultados.</p>
        </div>
      </div>
    </section>
  );
};

export default Content;