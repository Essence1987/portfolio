import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <div className='header-title'>
        <h1>Holden Melander</h1>
      </div>
      <button onClick={toggleNav} className={`toggle-button ${showNav ? 'active' : ''}`}>
        ☰
      </button>
      <nav className={showNav ? 'active' : ''}>
        <ul>
          <li>
            <Link to="/" onClick={toggleNav}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleNav}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={toggleNav}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
