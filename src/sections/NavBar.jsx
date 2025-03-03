import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants";

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} onClick={toggleMenu} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          Sri Padaya
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="hamburger-btn sm:hidden">
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="nav-sidebar sm:hidden">
          <NavItems toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default NavBar;
