import React from 'react';
import '../styles/Navbar.css';
import backgroundImage from "../assets/floralnav.png";
import { BiMoviePlay } from 'react-icons/bi';

function Navbar() {
  return (
    <nav 
      className="navbar navbar-bg"
      style={{
        '--navbar-bg': `url(${backgroundImage})`
      }}
    >
      <div className="navbar-name">Samantha Kerivan♡</div>

      <div className="navbar-actions">
        <a 
          className="book-button" 
          href="https://www.instagram.com/samantha.kerivan/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Book with me
        </a>

        <a 
          className="reels-icon" 
          href="https://www.instagram.com/samantha.kerivan/reels/" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Watch Reels"
        >
          <BiMoviePlay size={32} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;