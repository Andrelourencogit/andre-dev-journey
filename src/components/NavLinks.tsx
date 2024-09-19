interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = ({ isOpen }: NavLinksProps) => {
  return (
    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  );
};

export default NavLinks;
