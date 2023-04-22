import { Link } from "react-router-dom";

function Banner() {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    const image = document.querySelector(".home-banner-image");

    image.style.top = scroll * 0.15 + "px";
    image.style.webkitFilter = `blur(${scroll * 0.01}px)`;
  })

  return (
      <section className="section-banner">
        <div className="home-banner-container">
          <img src="assets/images/banner.jpg" alt="baner-maria" className="home-banner-image"/>

          <div className="home-texts-container">
            <span className="home-banner-text">Este </span>
            <span className="home-banner-text-lblue">curso </span>
            <span className="home-banner-text">no te va a cambiar la </span>
            <span className="home-banner-text-lblue">vida</span>
            <span className="home-banner-text">.</span>
          </div>

          <div className="home-link-container">
            <Link className="home-link">Empieza hoy</Link>
          </div>

        </div>
      </section>
  );
};

export default Banner;