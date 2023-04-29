function Home() {
  setTimeout (() => {
    const homeContainer = document.querySelector(".home-container");

    function hider() {
      homeContainer.style.display = "none";
    };

    if (homeContainer) {
      homeContainer.classList.add("animate__fadeOut");
      setInterval(hider, 1600);
    };
  }, 1500);

  return ( 
    <div>
      <div className="home-container animate__animated">
        <div>
          <img src="assets/icons/logo.png" alt="logo-image" className="home-logo"/>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Choose your favorites</h3>
        </div>

        <div>
          <label><input type="checkbox" id="casual" value="casual"/>Casual</label>
          <label><input type="checkbox" id="formal" value="formal"/>Formal</label>
          <label><input type="checkbox" id="sport" value="sport"/>Sport</label>
          <label><input type="checkbox" id="trend" value="trend"/>Trend</label>
          <label><input type="checkbox" id="women" value="women"/>Women</label>
          <label><input type="checkbox" id="men" value="men"/>Men</label>
          <label><input type="checkbox" id="dark" value="dark"/>Dark</label>
          <label><input type="checkbox" id="light" value="light"/>Light</label>
          <label><input type="checkbox" id="color" value="color"/>Color</label>
        </div>
      </div>
    </div>
  );
};

export default Home;