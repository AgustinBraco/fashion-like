import { useContext } from "react";
import { Context } from "../../context/context";
import Home from "../home/home";

function Account() {
  const { loginValue, adminValue } = useContext(Context);

  if (!loginValue && !adminValue) {
    return <Home />
  } else {
    return (
      <div>
        <p>ACCOUNT</p>
      </div>
    )
  }
};

export default Account;