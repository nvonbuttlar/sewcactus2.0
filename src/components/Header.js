import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Header.css";
import "../styles/navButton.css";

import Logo from "../images/cactus_real.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  window.onscroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.getElementById("nav");
    if (top > 150) {
      header.style.background = "#030812";
    } else {
      header.style.background = "transparent";
      header.style.transition = "background .2s ease-in-out";
    }
  };

  function toggleMobile() {
    const mobileMenu = document.getElementById("mobileMenu");
    console.log("click");

    ( mobileMenu.style.width === '0px' || mobileMenu.style.width === '0' || mobileMenu.style.width === '' )
    ? mobileMenu.style.width = '60%' 
    : mobileMenu.style.width = '0';

  }

  return (
    <div id="nav" className="header">
      <div className="titlecontainer">
        <Link to="#landing" className="link">
          <img className="logo" src={Logo} alt="Cactus Logo" />
        </Link>
        <h1 className="title">Cactus Sewing Studio</h1>
      </div>

      <div className="navBar">
        <Link to="#about" className="link navBtn">
          About
        </Link>
        <Link to="#gallery" className="link navBtn">
          Gallery
        </Link>
        <Link to="#contact" className="link navBtn">
          Contact
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          id="toggleMobile"
          className="link hamburgerMenu"
          onClick={toggleMobile}
        />
      </div>
      <div id="mobileMenu">
        <Link to="#about" className="link mm-link">
          About
        </Link>
        <Link to="#gallery" className="link mm-link">
          Gallery
        </Link>
        <Link to="#contact" className="link mm-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
