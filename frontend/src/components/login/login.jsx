import { Link } from "react-router-dom";

function Login() {
  const getJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
  };

  const loginValue = getJSON("login")

  if (loginValue) {
    return (
    <main className="login-main">
      <div className="login-container">
          <img src="assets/icons/verified.gif" alt="icon-verified" className="login-icon"/>
          <p className="login-text">Your are already loged</p>
          <Link to={"/account"} className="login-link">ACCOUNT</Link>
      </div>
    </main>
    )
  } else {
      return (
      <main className="login-main">
        <div>
          <p>LOGIN</p>
        </div>
      </main>
    )
  }
};
  
export default Login;