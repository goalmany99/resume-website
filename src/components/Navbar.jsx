import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-light z-10">
      <div>
        <h1 className="text-3xl font-bold text-tertiary cursor-pointer">Portfolio</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer font-medium hover:text-secondary duration-300">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="px-4 cursor-pointer font-medium hover:text-secondary duration-300">
          <Link to="about" smooth={true} duration={500}>About Me</Link>
        </li>
        <li className="px-4 cursor-pointer font-medium hover:text-secondary duration-300">
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="px-4 cursor-pointer font-medium hover:text-secondary duration-300">
          <Link to="experience" smooth={true} duration={500}>Experience</Link>
        </li>
        <li className="px-4 cursor-pointer font-medium hover:text-secondary duration-300">
          <Link to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li className="px-4 cursor-pointer font-medium hover:text-secondary duration-300">
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="px-4 cursor-pointer font-medium hover:text-secondary duration-300">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}`}>
        <li className="py-6 text-4xl cursor-pointer hover:text-secondary duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-secondary duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>About Me</Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-secondary duration-300">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-secondary duration-300">
          <Link onClick={handleClick} to="experience" smooth={true} duration={500}>Experience</Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-secondary duration-300">
          <Link onClick={handleClick} to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-secondary duration-300">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer hover:text-secondary duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;