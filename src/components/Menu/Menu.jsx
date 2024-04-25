import React from "react"
import "./Menu.css";
import { useState } from "react";

function Menu({ children }) {
  const [open, setOpen] = useState(true);
  console.log("children:", children);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

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
