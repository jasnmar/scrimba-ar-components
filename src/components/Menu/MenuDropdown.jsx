import "./Menu.css";
import { useContext } from "react";
import { ThemeContext } from "./Menu";

/**
 * Challenge part 2:
 * Pull in the value from context and update the conditional
 * rendering code below to use that value instead of `open`,
 * which used to be passed down via props.
 */


function MenuDropdown({ children }) {
  const value = useContext(ThemeContext)
  console.log("isOpen:", value);
  return value ? <div className="menu-dropdown">{children}</div> : null;
}

export default MenuDropdown;
