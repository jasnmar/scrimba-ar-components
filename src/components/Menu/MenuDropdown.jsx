import "./Menu.css";
import { useContext } from "react";
import { ButtonContext } from "./Menu";

function MenuDropdown({ children }) {
  const { open } = useContext(ButtonContext);
  return open ? <div className="menu-dropdown">{children}</div> : null;
}

export default MenuDropdown;
