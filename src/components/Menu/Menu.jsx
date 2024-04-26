import "./Menu.css";
import useToggle from "../../hooks/useToggle";
import { createContext } from "react";

const MenuContext = createContext()
/**
 * Challenge:
 * 3. Create context (MenuContext). Make sure to export
 *    it so we can access it in the other Menu components!
 *    (Will be a named export, not default export).
 * 4. Wrap the div below with the context provider
 * 5. What do you think we should pass as the values
 *    to the provider? 🤔
 */

function Menu({children, onOpen}) {
  const [open, toggleOpen] = useToggle()

  const values = {open, toggleOpen}
  return (
      <MenuContext.Provider value={values}>
        <div className="menu" role="menu">
          {children}
        </div>
      </MenuContext.Provider>


    )
}

export default Menu;
export { createContext }
