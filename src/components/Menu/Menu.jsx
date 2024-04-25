import "./Menu.css";
import { useState, cloneElement, Children } from "react";

function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="menu">
      {Children.map(children, (child) => {
        return cloneElement(child, {
          clickHandler: toggle, isOpen: open
        })
      })}
    </div>
    )
}

export default Menu;
