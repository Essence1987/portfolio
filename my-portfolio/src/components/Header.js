import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

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
      <nav className={`nav-menu ${showNav ? 'active' : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={toggleNav}
              className={location.pathname === '/' ? 'active' : ''}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={toggleNav}
              className={location.pathname === '/portfolio' ? 'active' : ''}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleNav}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              onClick={toggleNav}
              className={location.pathname === '/resume' ? 'active' : ''}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
