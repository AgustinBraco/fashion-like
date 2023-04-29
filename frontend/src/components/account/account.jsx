import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/context";

function Account() {
  const { useLocalStorage, loginValue, adminValue, getJSON } = useContext(Context);

  const firstNameSaved = getJSON("firstName");
  const lastNameSaved = getJSON("lastName");
  const emailSaved = getJSON("email");
  const phoneSaved = getJSON("phone");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameStorage, setFirstNameStorage] = useLocalStorage("firstName", "");
  const [lastNameStorage, setLastNameStorage] = useLocalStorage("lastName", "");
  const [emailStorage, setEmailStorage] = useLocalStorage("email", "");
  const [phoneStorage, setPhoneStorage] = useLocalStorage("phone", "");
  const [passwordStorage, setPasswordStorage] = useLocalStorage("password", "");

  function saveAccount(firstName, lastName, email, phone, password) {
    setFirstNameStorage(firstName);
    setLastNameStorage(lastName);
    setEmailStorage(email);
    setPhoneStorage(phone);
    setPasswordStorage(password);
  };

  function editAccount() {
    document.querySelector(".account-input-first-name").disabled = false;
    document.querySelector(".account-input-last-name").disabled = false;
    document.querySelector(".account-input-email").disabled = false;
    document.querySelector(".account-input-phone").disabled = false;
    document.querySelector(".account-input-password").disabled = false;
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

  function signOff() {
    localStorage.removeItem("login");
    location.reload();
  };

  function deleteUser() {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");
    localStorage.removeItem("login");
    location.reload();
  };

  // return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;

  if (loginValue || adminValue) {
    return (
    <main className="account-main">
      <section className="account-container">
        <nav className="account-navbar-container">
          <ul className="account-navbar">
            <li className="account-link-container"><a className="account-link" href="#profile">PROFILE</a></li>
            <li className="account-link-container"><a className="account-link" href="#likes">LIKES</a></li>
            <li className="account-link-container"><a className="account-link" href="#dislikes">DISLIKES</a></li>
            <li className="account-link-container"><a className="account-link" href="#votes">ALL VOTES</a></li>
          </ul>
        </nav>

        <div className="account-buttons-container">
          <button className="account-button" onClick={signOff}>Logout</button>
          <button className="account-button" onClick={deleteUser}>Delete</button>
        </div>
      </section>
      
      <section id="profile" className="account-profile-container">
        <h2 className="account-profile-title">PROFILE</h2>
        <form onSubmit={() => saveAccount(firstName, lastName, email, phone, password)} className="account-profile-form">

          <label htmlFor="firstName" className="account-form-label">First name</label>
          <input className="account-form-input account-input-first-name" required id="firstName" name="firstName" type="text" value={firstName} onChange={handleFirstName} placeholder={firstNameSaved} disabled/>
          
          <label htmlFor="lastName" className="account-form-label">Last name</label>
          <input className="account-form-input account-input-last-name" required id="lastName" name="lastName" type="text" value={lastName} onChange={handleLastName} placeholder={lastNameSaved} disabled/>
          
          <label htmlFor="email" className="account-form-label">Email</label>
          <input className="account-form-input account-input-email" required id="email" name="email" type="email" value={email} onChange={handleEmail} placeholder={emailSaved} disabled/>
          
          <label htmlFor="phone" className="account-form-label">Phone</label>
          <input className="account-form-input account-input-phone" required id="phone" name="phone" type="number" value={phone} onChange={handlePhone} placeholder={phoneSaved} disabled/>
          
          <label htmlFor="password" className="account-form-label">Password</label>
          <input className="account-form-input account-input-password" id="password" required name="password" type="password" value={password} onChange={handlePassword} disabled/>
          
          <button className="account-edit-button" type="button" onClick={editAccount}>Edit</button>
          <button className="account-save-button" type="submit">Save</button>
        </form>
      </section>

      <section className="account-likes-container" id="likes">
        <h2 className="account-likes-title">LIKES</h2>
      </section>

      <section className="account-dislikes-container" id="dislikes">
        <h2 className="account-dislikes-title">DISLIKES</h2>
      </section>

      <section className="account-votes-container" id="votes">
        <h2 className="account-votes-title">ALL VOTES</h2>
      </section>

    </main>
    )
  } else {
      return (
      <main className="no-account-main">
        <div className="no-account-container">
            <img src="assets/icons/wrong.gif" alt="icon-wrong" className="no-account-icon"/>
            <p className="no-account-text">Your dont have an account</p>
            <Link to={"/register"} className="no-account-link">REGISTER</Link>
            <p className="no-account-text">or</p>
            <Link to={"/login"} className="no-account-link">SIGN IN</Link>
        </div>
      </main>
    )
  }
};

export default Account;