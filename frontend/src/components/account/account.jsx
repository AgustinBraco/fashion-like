import { Link } from "react-router-dom";

function Account() {
  const getJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
  };

  const loginValue = getJSON("login");
  const adminValue = getJSON("admin");

  if (loginValue || adminValue) {
    return (
      <main className="account-main">
      <div>
        <p>ACCOUNT</p>
      </div>
    </main>
    )
  } else {
      return (
      <main className="account-main">
        <div className="account-container">
            <img src="assets/icons/wrong.gif" alt="icon-wrong" className="account-icon"/>
            <p className="account-text">Your dont have an account</p>
            <Link to={"/register"} className="account-link">REGISTER</Link>
            <p className="account-text">or</p>
            <Link to={"/login"} className="account-link">SIGN IN</Link>
        </div>
      </main>
    )
  }
};
  
export default Account;