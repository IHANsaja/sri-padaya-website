import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const navLinks = [
    {
        id: 1,
        name: "Home",
        url: "#home",
    },
    {
        id: 2,
        name: "About",
        url: "#about",
    },
    {
        id: 3,
        name: "Roads",
        url: "#roads",
    },
    {
        id: 4,
        name: "Contact",
        url: "#contact",
    },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full z-[5000] font-[var(--font-poppins)]">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <a href="#home" className="decoration-0">
          <h1 className="font-bold text-gray-100 text-3xl transition-transform duration-300 hover:scale-105">
            SRI PADAYA
          </h1>
        </a>
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              className="text-gray-100 font-bold text-xl relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:text-green-400 hover:after:w-full">
              {link.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-gray-100 text-2xl transition-transform duration-300 hover:scale-110 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="block mx-auto" /> : <FaBars className="block mx-auto" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-green-300/40 shadow-lg absolute w-full left-0 top-[100%] p-6 flex flex-col items-center space-y-6 rounded-lg backdrop-blur-lg">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              className="text-gray-100 bg-[#7AB53E] text-lg font-bold transition-all duration-300 hover:text-green-900 hover:bg-[#7AB53E] px-4 py-2 rounded-lg shadow-md hover:scale-110">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;