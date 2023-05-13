import Header from "../components/header/header.jsx";
import Home from "../components/home/home.jsx";
import Animation from "../components/animation/animation.jsx";
import Slider from "../components/slider/slider.jsx";
import Footer from "../components/footer/footer.jsx";

function Root() {
  return (
  <div>
    <Animation />
    <Footer />
    <Slider/>
    <Header isHome={true}/>
    <Home/>
  </div>
  );
};

export default Root;