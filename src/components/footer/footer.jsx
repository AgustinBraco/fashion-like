import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to={"https://www.linkedin.com/in/agust%C3%ADn-braco/"} className="footer-link" target="blank">Frontend: Agustín Braco</Link>
      <Link to={"https://www.linkedin.com/in/agust%C3%ADn-braco/"} className="footer-link" target="blank">Backend: Carlos Azira</Link>
      <p className="footer-text">© 2023 all rights reserved.</p>
      <p className="footer-text">No part of this site may be reproduced without our written permission.</p>
    </footer>
  );
};

export default Footer;