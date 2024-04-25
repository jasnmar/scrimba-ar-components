import { ToggleContext } from "./Toggle";
import { useContext } from "react";

function ToggleOn({ children}) {
    const { on, toggle } = useContext(ToggleContext)
    console.log('on:', on)

    return (
        <>
            {on ? children : null}
        </>
    )
}

export default ToggleOn
/**
 * Challenge:
 * 
 * 1. Create a new component, ToggleOn, that accepts children
 *    in props
 * 2. Receive the `on` state from context
 * 3. Conditionally render `children` if `on` is true. If `on`
 *    is false, render `null` instead of `children`
 */