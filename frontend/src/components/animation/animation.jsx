import { useContext } from "react";
import { Context } from "../../context/context";

function Animation() {
    const { useSessionStorage } = useContext(Context);
    const [firstOpen, setFirstOpen] = useSessionStorage("firstOpen", true);

    setTimeout (() => {
        const animation = document.querySelector(".animation-container");
        
        function hider() {
            animation.style.display = "none";
            setFirstOpen(false);
        };
        
        if (animation) {
            animation.classList.add("animate__fadeOut");
            setInterval(hider, 800);
        };
    }, 1500);

    if (!firstOpen) {
        return (<div></div>)
    } else {
        return (
            <div className="animation-container animate__animated">
                <div>
                  <img src="assets/icons/logo.png" alt="logo-image" className="animation-logo"/>
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
            </div>)
    }
};

export default Animation;