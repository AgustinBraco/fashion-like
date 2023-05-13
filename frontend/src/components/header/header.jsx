import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";

function Header({ isFeed, isHome }) {
  const { darkMode, loginValue, adminValue } = useContext(Context);

  if ((adminValue || loginValue) && isHome) {
    return (
      <header>
        <div className="header-container">
          <div className="header-account">
            <Link to={"/account"}>
              <svg
                className="header-account-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                wsdxmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    );
  } else if ( darkMode && (adminValue || loginValue) && isFeed) {
    return (
      <header>
        <div className="header-container">
          <div className="header-account">
            <Link to={"/account"}>
              <svg
                className="header-account-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="header-filters">
            <Link to={"/"}>
              <img src="/assets/icons/icon-filters.png" alt="icon-filters" className="header-filters-icon dark"/>
            </Link>
          </div>
        </div>
        <div className="bottom-bar"></div>
      </header>
    );
  } else if ((adminValue || loginValue) && isFeed) {
    return (
      <header>
        <div className="header-container">
          <div className="header-account">
            <Link to={"/account"}>
              <svg
                className="header-account-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="header-filters">
            <Link to={"/"}>
              <img src="/assets/icons/icon-filters.png" alt="icon-filters" className="header-filters-icon"/>
            </Link>
          </div>
        </div>
        <div className="bottom-bar"></div>
      </header>
    );
  } else if (darkMode && (adminValue || loginValue)) {
    return (
      <header>
        <div className="header-container">
          <div className="header-account">
            <Link to={"/account"}>
              <svg
                className="header-account-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="header-feed">
            <Link to={"/feed"}>
            <img src="/assets/icons/icon-feed.png" alt="icon-filters" className="header-feed-icon dark"/>
            </Link>
          </div>
        </div>
      </header>
    );
  } else if (adminValue || loginValue) {
    return (
      <header>
        <div className="header-container">
          <div className="header-account">
            <Link to={"/account"}>
              <svg
                className="header-account-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="var(--color-black)"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="header-feed">
            <Link to={"/feed"}>
            <img src="/assets/icons/icon-feed.png" alt="icon-filters" className="header-feed-icon"/>
            </Link>
          </div>
        </div>
      </header>
    );
  } else {
    return <div></div>;
  }
}

export default Header;
