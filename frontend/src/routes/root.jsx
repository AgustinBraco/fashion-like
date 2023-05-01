import Header from "../components/header/header.jsx";
import Home from "../components/home/home.jsx";
import Animation from "../components/animation/animation.jsx";
import Tutorial from "../components/tutorial/tutorial.jsx";

function Root() {
  return (
  <div>
    <Animation />
    <Tutorial />
    <Header isHome={true}/>
    <Home />
  </div>
  );
};

export default Root;