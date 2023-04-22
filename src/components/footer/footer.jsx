import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p className="footer-text">© María Begué 2023</p>
      <Link to={"/tyc"} className="footer-link">Términos y Condiciones - Política de Privacidad</Link>
    </footer>
  );
};

export default Footer;