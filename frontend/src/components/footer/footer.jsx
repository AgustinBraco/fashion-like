import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-up-container">
        <div>
          <p className="footer-job">Frontend</p>
          <Link to={"https://www.linkedin.com/in/agust%C3%ADn-braco/"} className="footer-link" target="blank">Agustín Braco</Link>
        </div>

        <div>
          <p className="footer-job">Backend</p>
          <Link to={"https://www.linkedin.com/in/agust%C3%ADn-braco/"} className="footer-link" target="blank">Carlos Azira</Link>
        </div>
      </div>

      <div>
        <p className="footer-text">© 2023 all rights reserved.</p>
        <p className="footer-text">No part of this site may be reproduced without our written permission.</p>
      </div>

    </footer>
  );
};

export default Footer;