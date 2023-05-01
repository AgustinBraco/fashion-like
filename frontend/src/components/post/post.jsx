import Posts from "../../mocks/mocks.json"
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import Home from "../home/home";

// Router
import { useParams } from "react-router-dom";

// Sweet alert
import Swal from 'sweetalert2'

function Post() {
  const { useLocalStorage, loginValue, adminValue } = useContext(Context);

  const [userVotes, setUserVotes] = useLocalStorage("votes", []);

  const itemId = useParams();
  const itemPost = Posts.find(item => item.id == itemId.id);

  const isVoted = userVotes.find(item => item.id == itemId.id);

  function likePost() {
    const likeButton = document.querySelector(".post-like-button");
    const dislikeButton = document.querySelector(".post-dislike-button");
    
    likeButton.style.display = "none";
    dislikeButton.style.display = "none";

    const newUserVote = [{
      "id": itemPost.id,
      "vote": "like"
    }];

    setUserVotes([
      ...userVotes,
      ...newUserVote
    ]);

    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: 'var(--color-black)',
      title: 'Thanks for your vote',
      showConfirmButton: false,
      timer: 1500
    });
  };

  function dislikePost() {
    const likeButton = document.querySelector(".post-like-button");
    const dislikeButton = document.querySelector(".post-dislike-button");
    
    likeButton.style.display = "none";
    dislikeButton.style.display = "none";

    const newUserVote = [{
      "id": itemPost.id,
      "vote": "dislike"
    }];

    setUserVotes([
      ...userVotes,
      ...newUserVote
    ]);

    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: 'var(--color-black)',
      title: 'Thanks for your vote',
      showConfirmButton: false,
      timer: 1500
    });
  };

  setTimeout(() => {
    const loader = document.querySelector(".loader");

    if (loader) {
      function hider() {
        loader.style.display = "none";
      }
      setInterval(hider, 1000);
      loader.classList.add("animate__fadeOut");
    }
  }, 1500);

  if (!loginValue && !adminValue) {
    return <Home />
  } else if (isVoted) {
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

      <div className="post-container">
        <div className="post-image-container">
          <img src={itemPost.image} alt="post-image" className="post-image"/>
        </div>

        <div>
          <p className="post-voted-text">Vote received. <br /> You can change it from Account - Votes</p>
        </div>
  
        <div className="post-voted-likes">
          <p>Total likes: {itemPost.votes}</p>
        </div>
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

      <div className="post-container">
        <div className="post-image-container">
          <img src={itemPost.image} alt="post-image" className="post-image"/>
        </div>
  
        <div className="post-buttons-container">

          <div>
            <button onClick={dislikePost} className="post-dislike-button">
              <svg className="post-icon" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill="#9F9D9D"/>
                <path d="M16.4 29L15 27.6L20.6 22L15 16.4L16.4 15L22 20.6L27.6 15L29 16.4L23.4 22L29 27.6L27.6 29L22 23.4L16.4 29Z" fill="black"/>
              </svg>
            </button>
          </div>

          <div>
            <button onClick={likePost} className="post-like-button">
              <svg className="post-icon" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill="#F26123" fillOpacity="0.4"/>
                <path d="M22.0026 32.2505L20.6734 31.0589C19.1304 29.6686 17.8547 28.4693 16.8464 27.4609C15.838 26.4526 15.0359 25.5474 14.4401 24.7453C13.8443 23.9432 13.428 23.2061 13.1911 22.5339C12.9543 21.8616 12.8359 21.1741 12.8359 20.4714C12.8359 19.0352 13.3172 17.8359 14.2797 16.8734C15.2422 15.9109 16.4415 15.4297 17.8776 15.4297C18.672 15.4297 19.4283 15.5977 20.1464 15.9339C20.8644 16.27 21.4832 16.7436 22.0026 17.3547C22.522 16.7436 23.1408 16.27 23.8589 15.9339C24.5769 15.5977 25.3332 15.4297 26.1276 15.4297C27.5637 15.4297 28.763 15.9109 29.7255 16.8734C30.688 17.8359 31.1693 19.0352 31.1693 20.4714C31.1693 21.1741 31.0509 21.8616 30.8141 22.5339C30.5773 23.2061 30.1609 23.9432 29.5651 24.7453C28.9693 25.5474 28.1672 26.4526 27.1589 27.4609C26.1505 28.4693 24.8748 29.6686 23.3318 31.0589L22.0026 32.2505ZM22.0026 29.7755C23.4693 28.4616 24.6762 27.3349 25.6234 26.3953C26.5707 25.4557 27.3193 24.6384 27.8693 23.9432C28.4193 23.2481 28.8012 22.6293 29.0151 22.087C29.229 21.5446 29.3359 21.0061 29.3359 20.4714C29.3359 19.5547 29.0304 18.7908 28.4193 18.1797C27.8082 17.5686 27.0443 17.263 26.1276 17.263C25.4095 17.263 24.745 17.4655 24.1339 17.8703C23.5227 18.2752 23.1026 18.7908 22.8734 19.4172H21.1318C20.9026 18.7908 20.4825 18.2752 19.8714 17.8703C19.2602 17.4655 18.5957 17.263 17.8776 17.263C16.9609 17.263 16.197 17.5686 15.5859 18.1797C14.9748 18.7908 14.6693 19.5547 14.6693 20.4714C14.6693 21.0061 14.7762 21.5446 14.9901 22.087C15.204 22.6293 15.5859 23.2481 16.1359 23.9432C16.6859 24.6384 17.4345 25.4557 18.3818 26.3953C19.329 27.3349 20.5359 28.4616 22.0026 29.7755Z" fill="#F26123"/>
              </svg>
            </button>
          </div>
  
        </div>
      </div>
    </div>
    );
  }
};

export default Post;