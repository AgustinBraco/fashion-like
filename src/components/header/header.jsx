import { Link } from "react-router-dom";

// Linkedin correcto 
// https://www.linkedin.com/in/mariabegue/

function Header() {

  function displayNavbar() {
    const navbar = document.querySelector(".nav-bar-container");
    navbar.classList.toggle("open-navbar");

    const menu = document.querySelector(".header-menu-mobile-button");
    menu.style.display = "none";

    const menuClose = document.querySelector(".header-menu-mobile-close-button");
    menuClose.style.display = "flex";
  }

  function hideNavbar() {
    const navbar = document.querySelector(".nav-bar-container");
    navbar.classList.toggle("open-navbar");

    const menu = document.querySelector(".header-menu-mobile-button");
    menu.style.display = "flex";

    const menuClose = document.querySelector(".header-menu-mobile-close-button");
    menuClose.style.display = "none";
  }

  return (
    <header>
      <Link to={"https://www.linkedin.com/in/agust%C3%ADn-braco/"} target="blank"><img src="assets/icons/linkedin.png" alt="icon-linkedin" className="header-linkedin"/></Link>

      <Link to={"/"}><img src="assets/icons/logo.png" alt="logo-maria-begue" className="header-logo"/></Link>

      <button className="header-menu-mobile-button" onClick={displayNavbar}>
        <img src="assets/icons/menu-mobile.png" alt="icon-menu-mobile" className="header-menu-mobile"/>
      </button>

      <nav className="nav-bar-container animate__animated animate__fadeIn">
        <button className="header-menu-mobile-close-button" onClick={hideNavbar}>
          <img src="assets/icons/menu-mobile-close.png" alt="icon-menu-mobile-close" className="header-menu-mobile-close"/>
        </button>

        <ul className="nav-bar">
          <li><Link className="nav-bar-link" to={"/"}>Inicio</Link></li>
          <li><Link className="nav-bar-link">Contenido</Link></li>
          <li><Link className="nav-bar-link">Artículos</Link></li>
          <li><Link className="nav-bar-link-lblue">Curso</Link></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;