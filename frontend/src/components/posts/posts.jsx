import { Link } from "react-router-dom";

function Posts() {
  const getJSON = (key) => {
    return JSON.parse(localStorage.getItem(key))
  };

  const loginValue = getJSON("login")

  if (loginValue) {
    return (
      <main className="posts-main">
        <div>
          <p>POST</p>
        </div>
      </main>
    )
  } else {
    return (
      <main className="posts-main">
        <div className="posts-container">
            <img src="assets/icons/wrong.gif" alt="icon-wrong" className="posts-icon"/>
            <p className="posts-text">You have to create an account to see and vote the posts</p>
            <Link to={"/register"} className="posts-link">REGISTER</Link>
        </div>
      </main>
    )
  }
};
  
export default Posts;