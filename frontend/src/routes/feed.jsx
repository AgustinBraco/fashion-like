import Header from "../components/header/header.jsx";
import Feed from "../components/feed/feed.jsx";

function FeedRoute() {
  return (
  <div>
    <Header isFeed={true}/>
    <Feed />
  </div>
  );
};

export default FeedRoute;