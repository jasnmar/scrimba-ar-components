import "./Menu.css";
import { useContext } from "react";
import { ButtonContext } from "./Menu";

function MenuDropdown({ children }) {
  const { open, menuId } = useContext(ButtonContext);
  return open ? (
      <div 
        className="menu-dropdown" 
        aria-hidden={!open}
        id={menuId}>
          {children}
      </div> 
  ) : null;
  
}

export default MenuDropdown;
