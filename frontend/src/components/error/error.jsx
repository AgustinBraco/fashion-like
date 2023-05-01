import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
    const error = useRouteError();
    return (
        <div className="error-container">
            <img src="/assets/icons/error.gif" alt="icon-error" className="error-icon"/>
            <p className="error-text">{error.statusText || error.message}</p>
            <p className="error-message">URL error: Incorrect or nonexistent.</p>
            <Link to={"/feed"} className="error-home-link">HOME</Link>
        </div>
    );
};

export default Error;