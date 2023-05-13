import Header from "../components/header/header.jsx";
import Feed from "../components/feed/feed.jsx";
import Footer from "../components/footer/footer.jsx";

function FeedRoute() {
  return (
  <div>
    <Header isFeed={true}/>
    <Footer />
    <Feed />
  </div>
  );
};

export default FeedRoute;