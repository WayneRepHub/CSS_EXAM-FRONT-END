import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import "./icons/DisplayIcons.scss";
import logo from "../logo/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        {/* right side column */}
        <div className="footer-link-wrapper">
          <div className="footer-link-items boxed-logo">
            <img src={logo} alt="logo" />
            <p1>Css Headliner</p1>

            <div className="boxed">
              <s2>
                Passionately designed & developed by CSS
                <FaLaptopCode className="icons laptop" />
              </s2>
            </div>
          </div>
        </div>

        {/* left side columns */}
        <div className="footer-link-wrapper push">
          <div className="footer-link-items">
            <s2>UST Computer Science Society</s2>
            <Link>About Us</Link>
            <Link>Community</Link>
            <Link>News & Events</Link>
          </div>
        </div>

        {/* social media icons and link */}
        <div className="footer-link-wrapper social-wrap">
          <div className="footer-link-items">
            <Link>
              <FaEnvelope className="icons email" />
              Email
            </Link>

            <Link>
              <FaFacebook className="icons facebook" />
              Facebook
            </Link>

            <Link>
              <FaTwitter className="icons twitter" />
              Twitter
            </Link>

            <Link>
              <FaInstagram className="icons instagram" />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
