interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Burger = ({ isOpen, toggleMenu }: BurgerProps) => {
  return (
    <div className="burger" onClick={toggleMenu}>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default Burger;
