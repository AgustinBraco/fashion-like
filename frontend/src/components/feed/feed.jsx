import { Link, Navigate } from "react-router-dom";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import { Context } from "../../context/context";
import Home from "../home/home";
import Posts from "../../mocks/mocks.json";

function Feed() {
  const { useLocalStorage, loginValue, adminValue, animationDone, tutorialDone } = useContext(Context)

  if (!tutorialDone || !animationDone) {
    return <Navigate to={"/"} />;
  };

  const [filters, setFilters] = useLocalStorage("filters", []);

  const filteredPosts = filters.filter(
    (obj, index, self) => index === self.findIndex((t) => t.id === obj.id)
  );

  const sortPosts = Posts.sort((a, b) => b.id - a.id);

  setTimeout(() => {
    const loader = document.querySelector(".loader");
    const feedContainer = document.querySelector(".feed-container");

    if (loader && feedContainer) {
      function hider() {
        feedContainer.style.overflow = "visible";
        loader.style.display = "none";
      }
      setInterval(hider, 1100);
      loader.classList.add("animate__fadeOut");
    }
  }, 1000);

  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  
  if (loginValue || adminValue) {
    useLayoutEffect(() => {
      setHeight(ref.current.scrollHeight);
    }, []);
  };

  // useLayoutEffect(() => {
  //   setHeight(ref.current.scrollHeight);
  // }, []);
    
  let fullHeight = height - innerHeight;
  const bottomBar = document.querySelector(".bottom-bar");

  window.addEventListener("scroll", () => {
    let scroll = scrollY;
    let progress = (scroll / fullHeight) * 100;
    
    if (bottomBar) {
      bottomBar.style.width = `${progress}vw`;
    };
  }, true);


  if (!loginValue && !adminValue) {
    return <Home />;
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

        <div className="feed-container" ref={ref}>
          {sortPosts.map((item) => {
            return (
              <div key={item.id} className="feed-image-container">
                <Link to={`/post/${item.id}`}>
                  <img
                    src={item.image}
                    alt="post-image"
                    className="feed-images"
                  />
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

        <div className="feed-container" ref={ref}>
          {filteredPosts.map((item) => {
            return (
              <div key={item.id} className="feed-image-container">
                <Link to={`/post/${item.id}`}>
                  <img
                    src={item.image}
                    alt="post-image"
                    className="feed-images"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Feed;
