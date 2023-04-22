import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

function ErrorRoot() {
    const error = useRouteError();
    return (
    <div>
        <Header />
        <main>
            <div className="error-container">
                <img src="assets/icons/error.gif" alt="icon-error" className="error-icon"/>
                <p className="error-title">Error inesperado:</p>
                <p className="error-text">"{error.statusText || error.message}"</p>
                <Link to={"/"} className="error-home-link">Inicio</Link>
            </div>
        </main>
        <Footer />
    </div>
    );
};

export default ErrorRoot;