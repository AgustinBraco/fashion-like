function Newsletter() {
  return (
    <section>
        <form className="form">
          <input type="email" required placeholder="Email" minLength={7} maxLength={50} className="input-email"/>
          <input type="submit" value="Suscribirse" className="input-submit"/>
        </form>
    </section>
  );
};

export default Newsletter;