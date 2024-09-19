const Burger = ({ isOpen, toggleMenu }) => {
  return (
    <div className="burger" onClick={toggleMenu}>
      <div className={isOpen ? "line open" : "line"}></div>
      <div className={isOpen ? "line open" : "line"}></div>
      <div className={isOpen ? "line open" : "line"}></div>
    </div>
  );
};

export default Burger;
