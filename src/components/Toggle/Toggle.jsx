import { useState } from "react"

function Toggle() {
    const [on, setOn] = useState(true)
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    return (
        <p>Toggle</p>
    )
}

export default Toggle