import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar sticky-top">
      <div className="container nav-container">
        <div className="nav-logo">MyPortfolio</div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="hero" smooth={true} duration={400} offset={-80} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="services" smooth={true} duration={400} offset={-60} onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="projects" smooth={true} duration={400} offset={-60} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="about" smooth={true} duration={400} offset={-60} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="contact" smooth={true} duration={400} offset={-60} onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
