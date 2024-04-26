import "./Menu.css";


function MenuDropdown({ children }) {
  
  return (

      <div className="menu-dropdown" aria-hidden={!open}>
        {children}
      </div>

  );
  
}

export default MenuDropdown;
