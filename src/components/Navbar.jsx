import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import logo from "../logo/logo.png";

function Navbar() {
  {
    /* Functions for navbar when in and out of mobile view  */
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FaBars className="icon" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* Home */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            {/* Community */}
            <li className="nav-item">
              <Link
                to="/community"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Community
              </Link>
            </li>

            {/* News and Events */}
            <li className="nav-item">
              <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
                News & Events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
