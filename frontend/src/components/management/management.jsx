import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";


function Posts() {
  const { adminValue } = useContext(Context);

  function signOff() {
    localStorage.removeItem("admin");
    location.reload();
  }

  // return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;

  if (adminValue) {
    return (
      <main className="manager-main">
      <section className="manager-container">
        <nav className="manager-navbar-container">
          <ul className="manager-navbar">
            <li className="manager-link-container"><a className="manager-link" href="#users">USERS</a></li>
            <li className="manager-link-container"><a className="manager-link" href="#posts">POSTS</a></li>
            <li className="manager-link-container"><a className="manager-link" href="#likes">LIKES</a></li>
            <li className="manager-link-container"><a className="manager-link" href="#dislikes">DISLIKES</a></li>
            <li className="manager-link-container"><a className="manager-link" href="#votes">ALL VOTES</a></li>
          </ul>
        </nav>

        <div className="manager-button-container">
          <button className="manager-button" onClick={signOff}>Logout</button>
        </div>
      </section>
      
      <section id="users" className="manager-users-container">
        <h2 className="manager-users-title">USERS</h2>
      </section>

      <section id="posts" className="manager-posts-container">
        <h2 className="manager-posts-title">POSTS</h2>
      </section>

      <section className="manager-likes-container" id="likes">
        <h2 className="manager-likes-title">LIKES</h2>
      </section>

      <section className="manager-dislikes-container" id="dislikes">
        <h2 className="manager-dislikes-title">DISLIKES</h2>
      </section>

      <section className="manager-votes-container" id="votes">
        <h2 className="manager-votes-title">ALL VOTES</h2>
      </section>
      </main>
    )
  } else {
    return (
      <main className="management-main">
        <div className="management-container">
            <img src="assets/icons/wrong.gif" alt="icon-wrong" className="management-icon"/>
            <p className="management-text">Only admins can manage posts</p>
            <Link to={"/"} className="management-link">HOME</Link>
        </div>
      </main>
    )
  }
};
  
export default Posts;