import "./Menu.css";
import { useState, createContext } from "react";

const ThemeContext = createContext()

function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <ThemeContext.Provider value={true}>
      <div className="menu">
        {children}
      </div>
      </ThemeContext.Provider>
    )
}

export default Menu;
export { ThemeContext }
