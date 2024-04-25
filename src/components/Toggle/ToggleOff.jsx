import { useContext } from "react";
import { ToggleContext } from "./Toggle";

function ToggleOff({ children }) {
    const { on } = useContext(ToggleContext)

    return (
        <>
            {!on ? children : null}
        </>
    )
}

export default ToggleOff