import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Piyush Pandey. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/Piyushpandey09" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/piyush-pandey-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/princepandey09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/princepandey09/" target="_blank" rel="noopener noreferrer" aria-label="Insta">
          <FaInstagram/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
