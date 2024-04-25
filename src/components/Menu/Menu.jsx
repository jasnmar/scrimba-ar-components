import "./Menu.css";
import { useState, createContext, useId  } from "react";

const ButtonContext = createContext()

function Menu({ children }) {
  const [open, setOpen] = useState(false);
  const menuId = useId()
  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  const values = {open, toggle, menuId}
  
  return (
    <ButtonContext.Provider value={values}>
      <div className="menu" role="menu">
        {children}
      </div>
      </ButtonContext.Provider>
    )
}

export default Menu;
export { ButtonContext }
