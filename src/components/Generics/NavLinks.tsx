interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = ({ isOpen }: NavLinksProps) => {
  return (
    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#formacao">Formação</a></li>
      <li><a href="#experiencias">Experiências</a></li>
      <li><a href="#habilidades">Habilidades</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
    </ul>
  );
};

export default NavLinks;