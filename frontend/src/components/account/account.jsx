import { useContext } from "react";
import { Context } from "../../context/context";

function Account() {
  const { loginValue, adminValue } = useContext(Context);

  if (!loginValue && !adminValue) {
    return (
      <div>
        <p>NO ACCOUNT</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>ACCOUNT</p>
      </div>
    )
  }
};

export default Account;