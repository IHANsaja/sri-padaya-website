import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants";

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col gap-4 p-4 bg-green-700 cursor-pointer rounded-md w-full md:flex md:flex-row md:gap-10 md:bg-transparent font-bold text-lg">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-hover">
          <a href={href} onClick={toggleMenu} className="decoration-0">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-100">
      <div className="flex flex-row justify-between w-full items-center p-4 px-8">
        <a href="/" className="text-white text-2xl font-bold">
          Sri Paadaya
        </a>

        {/* Desktop Navigation */}
        <nav className="md:flex hidden">
          <NavItems />
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden sm:flex" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Mobile Menu: only render if isOpen is true */}
      {isOpen && (
        <div className="md:hidden mx-4 flex justify-center items-center fixed top-10 inset-x-0 z-50">
          <nav className="w-full mt-5">
            <NavItems toggleMenu={toggleMenu} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;