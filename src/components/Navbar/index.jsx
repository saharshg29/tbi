import "./index.css";
import logo from "./logo.jpeg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <span className="space"></span>
          <div className="item1">
            <Link to="/">Home</Link>
          </div>
          <div className="item2">
            <Link to="/about">About Us</Link>
          </div>
          <div className="item3">
            <Link to="/incubation">Incubation</Link>
          </div>
          <div className="item4">
            <Link to="/facility">Facility Support</Link>
          </div>
          <div className="item5">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="item6">
            <Link to="/blocg">Blog</Link>
          </div>
          <div className="item7">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
