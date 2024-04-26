import "./Menu.css";
import useToggle from "../../hooks/useToggle";
import { createContext } from "react";

const MenuContext = createContext()

function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle({initialValue: false, onToggle: onOpen});
  const values = { open, toggleOpen };
  
  return (
    <MenuContext.Provider value={values}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export default Menu;
export { MenuContext }
