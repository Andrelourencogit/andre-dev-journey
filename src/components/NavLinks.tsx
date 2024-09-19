const NavLinks = ({ isOpen }) => {
  return (
    <ul className={isOpen ? "nav-links open" : "nav-links"}>
      <li><a href="#home">Início</a></li>
      <li><a href="#about">Sobre Mim</a></li>
      <li><a href="#projects">Projetos</a></li>
      <li><a href="#skills">Habilidades</a></li>
      <li><a href="#contact">Contato</a></li>
    </ul>
  );
};

export default NavLinks;
