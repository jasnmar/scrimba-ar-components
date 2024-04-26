import "./Menu.css";
import { MenuContext } from "./Menu";
import { useContext } from "react";

function MenuDropdown({ children }) {
  const { open } = useContext(MenuContext);
  return (
    <>
      {open && (
        <div className="menu-dropdown" aria-hidden={!open}>
          {children}
        </div>
      )}
    </>
  );
}

export default MenuDropdown;
