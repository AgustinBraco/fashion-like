import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Posts from "../components/posts/posts.jsx";

function PostsRoot() {
    return (
        <div>
            <Header />
            <Posts />
            <Footer />
        </div>
    );
};

export default PostsRoot;