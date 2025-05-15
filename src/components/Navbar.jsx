import React from 'react'
import '../styles/Navbar.css';

function Navbar() {
  return (
  <nav className="navbar">
      <div className="navbar-name">Samantha Kerivan ♡</div>
      <a 
        className="book-button" 
        href="https://www.instagram.com/samantha.kerivan/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Book with me
      </a>
    </nav>
  )
}

export default Navbar
