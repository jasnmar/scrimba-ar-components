import { ToggleContext } from "./Toggle";
import { useContext } from "react";

function ToggleOn({ children}) {
    const { on } = useContext(ToggleContext)

    return (
        <>
            {on ? children : null}
        </>
    )
}

export default ToggleOn