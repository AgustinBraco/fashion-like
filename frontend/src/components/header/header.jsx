import { Link } from "react-router-dom";

function Header() {
  const getJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
  };

  const loginValue = getJSON("login")

  function displayNavbar() {
    const navbar = document.querySelector(".nav-bar-container");

    if (navbar.classList.contains("animate__fadeOut")) {
      navbar.classList.remove("animate__fadeOut")
      navbar.classList.add("animate__fadeIn")
    }

    setTimeout(() => {
      navbar.classList.toggle("open-navbar");

      const menu = document.querySelector(".header-menu-mobile-button");
      menu.style.display = "none";
  
      const menuClose = document.querySelector(".header-menu-mobile-close-button");
      menuClose.style.display = "flex";
    }, 500)
  }

  function hideNavbar() {
    const navbar = document.querySelector(".nav-bar-container");

    if (navbar.classList.contains("animate__fadeIn")) {
      navbar.classList.remove("animate__fadeIn")
      navbar.classList.add("animate__fadeOut")
    }

    setTimeout(() => {
      navbar.classList.toggle("open-navbar");

      const menu = document.querySelector(".header-menu-mobile-button");
      menu.style.display = "flex";
  
      const menuClose = document.querySelector(".header-menu-mobile-close-button");
      menuClose.style.display = "none";
    }, 500)
  }

  if (loginValue) {
    return (
      <header>
        <Link to={"/"}><img src="assets/icons/logo.png" alt="logo" className="header-logo"/></Link>
  
        <button className="header-menu-mobile-button" onClick={displayNavbar}>
          <img src="assets/icons/menu-mobile.png" alt="icon-menu-mobile" className="header-menu-mobile"/>
        </button>
  
        <nav className="nav-bar-container animate__animated animate__fadeIn animate__fadeOut">
          <button className="header-menu-mobile-close-button" onClick={hideNavbar}>
            <img src="assets/icons/menu-mobile-close.png" alt="icon-menu-mobile-close" className="header-menu-mobile-close"/>
          </button>
  
          <ul className="nav-bar">
            <li><Link className="nav-bar-link" to={"/posts"}>POSTS</Link></li>
            <li><Link className="nav-bar-link" to={"/account"}>ACCOUNT</Link></li>
            <li><Link className="nav-bar-link" to={"/contact"}>CONTACT</Link></li>
            <li className="admin-link"><Link className="nav-bar-link-grey" to={"/management"}>Management</Link></li>
          </ul>
        </nav>
  
      </header>
    );
  } else {
    return (
      <header>
        <Link to={"/"}><img src="assets/icons/logo.png" alt="logo" className="header-logo"/></Link>
  
        <button className="header-menu-mobile-button" onClick={displayNavbar}>
          <img src="assets/icons/menu-mobile.png" alt="icon-menu-mobile" className="header-menu-mobile"/>
        </button>
  
        <nav className="nav-bar-container animate__animated animate__fadeIn animate__fadeOut">
          <button className="header-menu-mobile-close-button" onClick={hideNavbar}>
            <img src="assets/icons/menu-mobile-close.png" alt="icon-menu-mobile-close" className="header-menu-mobile-close"/>
          </button>
  
          <ul className="nav-bar">
            <li><Link className="nav-bar-link" to={"/posts"}>POSTS</Link></li>
            <li><Link className="nav-bar-link" to={"/login"}>LOGIN</Link></li>
            <li><Link className="nav-bar-link" to={"/register"}>REGISTER</Link></li>
            <li><Link className="nav-bar-link" to={"/contact"}>CONTACT</Link></li>
            <li className="admin-link"><Link className="nav-bar-link-grey" to={"/management"}>Management</Link></li>
          </ul>
        </nav>
  
      </header>
    );
  }
};

export default Header;