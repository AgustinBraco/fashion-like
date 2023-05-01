import { useContext } from "react";
import { Context } from "../../context/context";

// Swiper
import Slider  from "../slider/slider.jsx";
import slides from "../../mocks/tutorial.json";

function Tutorial() {
    const { useLocalStorage, loginValue, adminValue } = useContext(Context);
    const [firstTime, setFirstTime] = useLocalStorage("firstTime", true);

    function quitTutorial () {
        setFirstTime(false);
    }

    function skipTutorial() {
        setInterval(quitTutorial, 1000);
        const tutorialContainer = document.querySelector(".tutorial-container");
        tutorialContainer.classList.add("animate__fadeOut");
    };

    function finishTutorial() {
        setInterval(quitTutorial, 1000);
        const tutorialContainer = document.querySelector(".tutorial-container");
        tutorialContainer.classList.add("animate__fadeOut");
      };

    if (!firstTime || loginValue || adminValue) {
        return (<div></div>)
    } else {
        return (
            <div className="tutorial-container animate__animated">
                <Slider finishTutorial={finishTutorial} slides={slides}/>

                <div className="tutorial-buttons-container">
                    <button className="tutorial-button" onClick={skipTutorial}>Skip</button>
                </div>
            </div>
        )
    }
};

export default Tutorial;