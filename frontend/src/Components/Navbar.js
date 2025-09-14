// Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // ADD THIS
import '../Style/Navbar.css';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-shadow');
      } else {
        navbar.classList.remove('navbar-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand fe-bold" to="/">
          <i className="bi bi-code-slash me-2"></i>MyPortfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">
                <i className="bi bi-kanban-fill me-1"></i> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resume">
                <i className="bi bi-file-earmark-person-fill me-1"></i> Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Certificate">
                <i className="bi bi-patch-check-fill me-1"></i> Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Contact">
                <i className="bi bi-envelope-fill me-1"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
