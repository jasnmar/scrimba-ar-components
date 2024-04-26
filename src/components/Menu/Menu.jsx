import "./Menu.css";
import useToggle from "../../hooks/useToggle";
import { createContext } from "react";

const MenuContext = createContext()
/**
 * Challenge:
 * 6. Access the needed context values in the MenuButton
 *    and MenuDropdown components. See if you can remember
 *    (or figure out again) how those values are used in each 
 *    of those components. Once you've done this successfully,
 *    the Menu should start working again (except for the onOpen
 *    callback, which we'll work on fixing soon).
 */

function Menu({children}) {
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
export { MenuContext }
