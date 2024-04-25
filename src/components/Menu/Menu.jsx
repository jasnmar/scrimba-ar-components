import React from "react"
import "./Menu.css";
import { useState } from "react";

function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

      /** Discovery Challenge:
     * In the MenuButton, MenuDropdown, and MenuItem components, 
     * accept `toggle` and `open` props and just console log 
     * both of them in all 3 components.
     */
  return (
    <div className="menu">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          clickHandler: toggle, isOpen: open
        })
      })}
    </div>
    )
}

export default Menu;
