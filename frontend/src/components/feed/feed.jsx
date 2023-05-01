import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";
import Posts from "../../mocks/mocks.json"

function Feed() {
  const { useLocalStorage, loginValue, adminValue } = useContext(Context);
  const [filters, setFilters] = useLocalStorage("filters", []);

  const filteredPost = filters.filter(
    (obj, index, self) => index === self.findIndex((t) => t.id === obj.id)
  );

  setTimeout(() => {
    const loader = document.querySelector(".loader");
    const feedContainer = document.querySelector(".feed-container");

    feedContainer.style.overflow = "scroll";

    function hider() {
      loader.style.display = "none";
    }
    setInterval(hider, 1000);

    loader.classList.add("animate__fadeOut");
  }, 1500);

  if (!loginValue && !adminValue) {
    return (
      <div>
        <p>NO ACCOUNT</p>
      </div>
    );
  } else if (filters.length === 0) {
    return (
    <div>
      <div className="loader animate__animated">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="feed-container">
        {Posts.map((item) => {
            return (
              <div key={item.id} className="feed-image-container">
              <Link to={`/post/${item.id}`}>
                <img src={item.image} alt="post-image" className="feed-images" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    );
  } else {
    return (
    <div>
      <div className="loader animate__animated">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="feed-container">
        {filteredPost.map((item) => {
          return (
              <div key={item.id} className="feed-image-container">
              <Link to={`/post/${item.id}`}>
                <img src={item.image} alt="post-image" className="feed-images" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    );
  };
};

export default Feed;