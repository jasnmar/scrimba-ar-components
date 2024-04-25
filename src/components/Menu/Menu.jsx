import "./Menu.css";
import { useState, createContext } from "react";

const ButtonContext = createContext()

function Menu({ children }) {
  const [open, setOpen] = useState(true);
    /**
     * Challenge:
     * Using what you know now, complete the Menu component so 
     * everything is working again via Context + State
     */

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }
  const values = {open, toggle}
  return (
    <ButtonContext.Provider value={values}>
      <div className="menu">
        {children}
      </div>
      </ButtonContext.Provider>
    )
}

export default Menu;
export { ButtonContext }
