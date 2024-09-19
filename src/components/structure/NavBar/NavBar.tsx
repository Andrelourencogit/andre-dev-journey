import { useState } from 'react';
import NavLinks from '../../Generics/NavLinks';
import Burger from '../../Generics/Burger';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>André Lourenço</h1>
      </div>
      <NavLinks isOpen={isOpen} />
      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;