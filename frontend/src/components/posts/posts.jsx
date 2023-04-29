import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";

function Posts() {
  const { loginValue, adminValue } = useContext(Context);

  // return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;

  if (loginValue || adminValue) {
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
            <p className="posts-text">or</p>
            <Link to={"/login"} className="posts-link">SIGN IN</Link>
        </div>
      </main>
    )
  }
};
  
export default Posts;