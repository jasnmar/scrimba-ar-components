import { useContext } from "react"
import { ToggleContext } from "./Toggle"



function ToggleDisplay({ children }) {
    const { on, toggle } = useContext(ToggleContext)

    return (
        {children(on)}
    )
}

export default ToggleDisplay