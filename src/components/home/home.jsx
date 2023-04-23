import { Link } from "react-router-dom";

function Home() {

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    const bannerMobile = document.querySelector(".banner-mobile-image");
    bannerMobile.style.webkitFilter = `blur(${scroll * 0.01}px)`;
    
    const bannerDesktop = document.querySelector(".banner-desktop-image");
    bannerDesktop.style.webkitFilter = `blur(${scroll * 0.01}px)`;
  })

  return (
    <main>
      <section className="section-banner">
        <div className="banner-mobile-container">
          <img src="assets/images/banner-mobile.jpg" alt="banner-new-website" className="banner-mobile-image"/>
        </div>

        <div className="banner-desktop-container">
          <img src="assets/images/banner-desktop.jpg" alt="banner-new-website" className="banner-desktop-image"/>
        </div>
      </section>

      <section className="section-intro">
        <div className="intro-title-container">
          <h1 className="intro-title">FASHION LIKE</h1> 
        </div>
        
        <div className="intro-text-container">
          <p className="intro-text">Welcome to our fashion launch platform! Here, you can stay up-to-date with the latest trends and discover new collections from your favorite brands. But that's not all! You can also voice your opinion and vote for your favorite launches, becoming a crucial part of the selection process for the clothes that hit the stores. In our community, your voice counts, and together we can influence current fashion. Join us and be part of the fashion revolution.</p>
        </div>
      </section>

      <section className="section-interest">
        <div className="interest-texts-container">
          <p className="interest-text">On our platform we care about the environment, so you will find a wide selection of sustainable and eco-friendly garments. We care not only about style, but also about the impact we have on the world. That's why we make sure to show you options that take care of the environment, without sacrificing fashion.</p>

          <p className="interest-text">We have a team of fashion experts who receive and analyze your answers, which allows us to customize the posts according to your interests, showing the ideal garments for you.</p>
        </div>

        <div className="interest-link-container">
          <Link className="interest-link" to={"/posts"}>POSTS</Link>
        </div>
      </section>

      <section className="section-register">
        <div className="register-link-container">
          <Link className="register-link" to={"/register"}>REGISTER</Link>
        </div>

        <div className="register-texts-container">
          <p className="register-text">We strive to offer the best information and advice in fashion, so your feedback is essential to us. We are proud to be a community where our users can interact with us. That's why we invite you to register on our website, so you can receive alerts about new posts and emerging trends.</p>

          <p className="register-text">Don't wait any longer, register now and become part of the community! We are excited to have you on board and we are sure you will enjoy the experience.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;