import React from "react";
import "../styles/Footer.css";

import Logo from "../images/cactus_real.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a
          className="social-link"
          href="https://www.instagram.com/cactussewingstudio/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="insta" />
        </a>
        <a
          className="social-link"
          href="https://www.facebook.com/Cactussewingstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="fb" />
        </a>
      </div>
      <div className="contact">
        <h4>Cactus Sewing Studio</h4>
        <ul>
          <li> e: melinda@sewcactus.ca</li>
          <li> p: +1 647 278 2700</li>
          <li> 1 Wiltshire Ave, Suite #219</li>
          <li> Toronto, Ontario</li>
        </ul>
      </div>

      <div className="footer-logo">
        <img className="logo" src={Logo} alt="Cactus Logo" />
        <p className="year" >&copy; {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
