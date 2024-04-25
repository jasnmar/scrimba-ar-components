import "./Menu.css";

function MenuDropdown({ children }) {
  return open ? (
      <div 
        className="menu-dropdown" 
        aria-hidden={!open}
        >
          {children}
      </div> 
  ) : null;
  
}

export default MenuDropdown;
