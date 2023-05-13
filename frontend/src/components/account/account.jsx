import { useContext } from "react";
import { Context } from "../../context/context";
import { Navigate } from "react-router-dom";
import Home from "../home/home";

function Account() {
  const { loginValue, adminValue, animationDone, tutorialDone } = useContext(Context)

  if (!tutorialDone || !animationDone) {
    return <Navigate to={"/"} />;
  };

  if (!loginValue && !adminValue) {
    return <Home />
  } else {
    return (
      <div>
      </div>
    )
  };
};

export default Account;