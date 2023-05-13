import { useContext } from "react";
import { Context } from "../../context/context";

function Footer() {
  const { toggleMode, darkMode } = useContext(Context);

  if (darkMode) {
    return (
      <div className="footer-container">
      <button onClick={toggleMode} className="footer-button">
        <img src="/assets/icons/dark-mode.png" alt="dark-mode-icon" className="footer-image-dark"/>
      </button>
    </div>
    )
  } else {
    return (
      <div className="footer-container">
        <button onClick={toggleMode} className="footer-button">
          <img src="/assets/icons/light-mode.png" alt="light-mode-icon" className="footer-image-light"/>
        </button>
      </div>
    )
  }
}

export default Footer;
