import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

function Login() {
  const { useLocalStorage, loginValue, adminValue } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailStorage, setEmailStorage] = useLocalStorage("email", "");
  const [passwordStorage, setPasswordStorage] = useLocalStorage("password", "");
  const [logedValue, setLogedValue] = useLocalStorage("login", "");

  function login(email, password) {
    setEmailStorage(email);
    setPasswordStorage(password);
    setLogedValue(true);
    window.location.href = "/account"
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  };

  if (loginValue || adminValue) {
    return (
    <main className="loged-main">
      <div className="loged-container">
          <img src="assets/icons/verified.gif" alt="icon-verified" className="loged-icon"/>
          <p className="loged-text">Your are already loged</p>
          <Link to={"/account"} className="loged-link">ACCOUNT</Link>
      </div>
    </main>
    )
  } else {
    return (
      <main className="login-main">
        <section className="login-background"></section>

        <section className="login-container">

          <h2 className="login-title">LOGIN</h2>

          <form onSubmit={() => login(email, password)} className="login-form">
            <label htmlFor="email" className="login-form-label">Email</label>
            <input className="login-form-input" required id="email" name="email" type="email" value={email} onChange={handleEmail} placeholder="johndoe@gmail.com"/>

            <label htmlFor="password" className="login-form-label">Password</label>
            <input className="login-form-input" required id="password" name="password" type="password" value={password} onChange={handlePassword}/>

            <button className="login-form-button" type="submit">Sign in</button>
          </form>

        </section>
      </main>
    )
  }
};
  
export default Login;