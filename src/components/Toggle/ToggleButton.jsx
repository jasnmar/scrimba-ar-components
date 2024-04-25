import { ToggleContext } from "./Toggle";
import { useContext } from "react";

function ToggleButton({ children}) {
    const { toggle } = useContext(ToggleContext)
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}

export default ToggleButton