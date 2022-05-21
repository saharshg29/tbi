import "./index.css";
import { useNavigate } from "react-router-dom";
import logo from "./logo.jpeg";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <img
          id="img"
            onClick={() => navigate("/")}
            src={logo}
            className="navbar-brand"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link disabled"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
