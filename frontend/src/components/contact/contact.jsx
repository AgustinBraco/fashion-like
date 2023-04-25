import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(firstName, lastName, email, phone, message) {
    event.preventDefault();
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

  function handleMessage(e) {
    setMessage(e.target.value);
  };

  return (
    <main className="contact-main">

      <section>
        <div className="contact-image"></div>
      </section>

      <section className="contact-container">
        <h2 className="contact-title">CONTACT</h2>
        <form onSubmit={() => sendEmail(firstName, lastName, email, phone, message)} className="contact-form">
          <label htmlFor="firstName" className="contact-form-label">First name</label>
          <input className="contact-form-input" required id="firstName" name="firstName" type="text" value={firstName} onChange={handleFirstName} placeholder="John"/>
          
          <label htmlFor="lastName" className="contact-form-label">Last name</label>
          <input className="contact-form-input" required id="lastName" name="lastName" type="text" value={lastName} onChange={handleLastName} placeholder="Doe"/>
          
          <label htmlFor="email" className="contact-form-label">Email</label>
          <input className="contact-form-input" required id="email" name="email" type="email" value={email} onChange={handleEmail} placeholder="johndoe@gmail.com"/>
          
          <label htmlFor="phone" className="contact-form-label">Phone</label>
          <input className="contact-form-input form-input-phone" required id="phone" name="phone" type="number" value={phone} onChange={handlePhone} placeholder="+5491122334455"/>
          
          <label htmlFor="message" className="contact-form-label">Message</label>
          <textarea className="contact-form-textarea" required id="message" name="message" cols="30" rows="10" value={message} onChange={handleMessage}></textarea>
          
          <button className="contact-form-button" type="submit">Send</button>
        </form>
      </section>

      <section className="contact-map-container">
        <h3 className="contact-map-text">LOCATION</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.7908482763346!2d-77.03758556949482!3d38.906350550378235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c0896f06db%3A0xb1616aab085a8353!2sGeneral%20Winfield%20Scott%20Statue!5e0!3m2!1ses-419!2sar!4v1682450349146!5m2!1ses-419!2sar" loading="lazy" className="contact-map"></iframe>
      </section>
    </main>
  );
};
  
export default Contact;