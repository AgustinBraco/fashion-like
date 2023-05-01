import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";

function Header( {isFeed, isHome} ) {
  const { loginValue, adminValue } = useContext(Context);

  if ( adminValue || loginValue && isHome ) {
    return (
      <header>
          <div className="header-account">
            <Link className="header-account-link" to={"/account"}>
                <svg className="header-account-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
          </div>
      </header>
    );
  } else if ( adminValue || loginValue && isFeed ) {
    return (
      <header>
          <div className="header-account">
            <Link className="header-account-link" to={"/account"}>
                <svg className="header-account-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
          </div>

          <div className="header-filters">
            <Link className="header-filters-link" to={"/"}>
              <svg className="header-filters-icon" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 1H1V4H19V1Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 7H4V10H16V7Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 13H7V16H13V13Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
      </header>
    );
  } else if ( adminValue || loginValue ) {
    return (
      <header>
          <div className="header-account">
            <Link className="header-account-link" to={"/account"}>
                <svg className="header-account-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157  16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
          </div>

          <div className="header-feed">
            <Link className="header-feed-link" to={"/feed"}>
              <svg className="header-feed-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1H1V8H8V1Z" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 1H12V8H19V1Z" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 12H12V19H19V12Z" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H1V19H8V12Z" stroke="black" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
      </header>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Header;