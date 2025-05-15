import React from 'react';
import '../styles/Navbar.css';
import backgroundImage from "../assets/floralnav.png";

function Navbar() {
  return (
    <nav 
      className="navbar" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(100% - 3.5rem) center',
        backgroundSize: '36rem 9rem',
      
      }}
    >
      <div className="navbar-name">Samantha Kerivan♡</div>

      <a 
        className="book-button" 
        href="https://www.instagram.com/samantha.kerivan/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Book with me
      </a>
    </nav>
  );
}

export default Navbar;
