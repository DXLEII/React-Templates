import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/navbar.css';
import logo from '../imgs/placeholder.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="navbar-content">
        <Link to="/">
          <img src={logo} alt="BBF Logo" className="logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        </div>

      
        <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={toggleMobileMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/approach" onClick={toggleMobileMenu}>Approach</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" onClick={toggleMobileMenu}>FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" onClick={toggleMobileMenu}>Testimonials</Link>
          </li>
        </ul>

        <div className="contact-item">
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
