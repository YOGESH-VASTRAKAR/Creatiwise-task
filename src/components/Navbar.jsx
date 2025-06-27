import { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/logo.svg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <>
     <nav className="navbar">
      <div className="nav-section logo-section">
        <div className="navbar-logo">
          <img src={logo} alt={logo}/>
        </div>
      </div>

      <div className={`nav-section links-section ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} className={link === 'Home' ? 'active' : ''}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section hire-section">
        <button className="hire-btn">HIRE ME</button>
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    </>
   
  );
};

export default Navbar;