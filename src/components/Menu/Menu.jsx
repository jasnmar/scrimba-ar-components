import "./Menu.css";
import { useState } from "react";

function Menu({ children }) {
  const [open, setOpen] = useState(true);
  console.log("children:", children);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return <div className="menu">{children}</div>;
}

export default Menu;
