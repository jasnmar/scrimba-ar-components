import "./Menu.css";
import { useId } from "react";



function Menu({ children }) {
  return (

      <div className="menu" role="menu">
        {children}
      </div>

    )
}

export default Menu;
