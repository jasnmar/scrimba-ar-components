import { ToggleContext } from "./Toggle";
import { useContext } from "react";

function ToggleButton({ children}) {
    const { on, toggle} = useContext(ToggleContext)
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}


/**
 * Challenge:
 * 
 * 1. Create a ToggleButton component
 * 2. Receive the `toggle` function from context (2 parts!)
 * 3. Render a div with an onClick that calls `toggle`
 */

export default ToggleButton