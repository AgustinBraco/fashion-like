import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Error from "../components/error/error.jsx";

function ErrorRoot() {
    return (
        <div>
            <Header />
            <Error />
            <Footer />
        </div>
    );
};

export default ErrorRoot;