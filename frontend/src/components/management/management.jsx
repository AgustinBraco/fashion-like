import { Link } from "react-router-dom";

function Posts() {
  const getJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
  };

  const adminValue = getJSON("admin");

  if (adminValue) {
    return (
      <main className="manager-main">
        <div>
          <p>HOLE ADMIN</p>
        </div>
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