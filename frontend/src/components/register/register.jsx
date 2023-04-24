import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

function Register() {

  const { useLocalStorage } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [firstNameStorage, setFirstNameStorage] = useLocalStorage("firstName", "");
  const [lastNameStorage, setLastNameStorage] = useLocalStorage("lastName", "");
  const [emailStorage, setEmailStorage] = useLocalStorage("email", "");
  const [phoneStorage, setPhoneStorage] = useLocalStorage("phone", "");
  const [passwordStorage, setPasswordStorage] = useLocalStorage("password", "");

  const [loginValue, setLoginValue] = useLocalStorage("login", false);

  function register(firstName, lastName, email, phone, password) {
    setFirstNameStorage(firstName);
    setLastNameStorage(lastName);
    setEmailStorage(email);
    setPhoneStorage(phone);
    setPasswordStorage(password);
    setLoginValue(true);
    window.location.href = "/account"
  };

  function handleFirstName(e) {
    setFirstName(e.target.value);
  };

  function handleLastName(e) {
    setLastName(e.target.value);
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  };

  function handlePhone(e) {
    setPhone(e.target.value);
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  };

  function handleRepeatPassword(e) {
    setRepeatPassword(e.target.value);
  };

  if (loginValue) {
    return (
      <main className="register-main">
        <div className="registered-container">
            <img src="assets/icons/verified.gif" alt="icon-verified" className="registered-icon"/>
            <p className="registered-text">Your are already registred</p>
            <Link to={"/account"} className="registered-link">ACCOUNT</Link>
        </div>
      </main>
    )
  } else {
    return (
      <main className="register-main">
        <section className="register-background"></section>

        <section className="register-container">
  
            <h2 className="register-title">WELCOME</h2>

            <form onSubmit={() => register(firstName, lastName, email, phone, password, repeatPassword)} className="form">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input className="form-input" required id="firstName" name="firstName" type="text" value={firstName} onChange={handleFirstName} placeholder="John"/>
              
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input className="form-input" required id="lastName" name="lastName" type="text" value={lastName} onChange={handleLastName} placeholder="Doe"/>
              
              <label htmlFor="email" className="form-label">Email</label>
              <input className="form-input" required id="email" name="email" type="email" value={email} onChange={handleEmail} placeholder="johndoe@gmail.com"/>
              
              <label htmlFor="phone" className="form-label">Phone</label>
              <input className="form-input form-input-phone" required id="phone" name="phone" type="number" value={phone} onChange={handlePhone} placeholder="+5491122334455"/>
              
              <label htmlFor="password" className="form-label">Password</label>
              <input className="form-input" required id="password" name="password" type="password" value={password} onChange={handlePassword}/>
              
              <label htmlFor="repeatPassword" className="form-label">Repeat password</label>
              <input className="form-input" required id="repeatPassword" name="repeatPassword" type="password" value={repeatPassword} onChange={handleRepeatPassword}/>
              
              <button className="form-button" type="submit">Sign in</button>
            </form>

        </section>
      </main>
    );
  }
  };
  
  export default Register;