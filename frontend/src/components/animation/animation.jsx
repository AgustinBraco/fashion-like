import { useContext } from "react";
import { Context } from "../../context/context.jsx";

function Animation() {
	const { animationDone, setAnimationDone } = useContext(Context);

	setTimeout(() => {
		const animation = document.querySelector(".animation-container");
		function hider() {
			animation.style.display = "none";
			setAnimationDone(true);
		}
		if (animation) {
			animation.classList.add("animate__fadeOut");
			setInterval(hider, 800);
		}
	}, 1500);

	if (!animationDone) {
		return (
			<div className="animation-container animate__animated">
				<div>
					<h2 className="animation-title">Fashion</h2>
					<h2 className="animation-title">Like.</h2>
					<p className="animation-text">Fashion Trends - 2023</p>

					<div className="lds-ellipsis">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Animation;
