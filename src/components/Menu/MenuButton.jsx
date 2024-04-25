import "./Menu.css"
import Button from "../Button/Button"

function MenuButton({ children, onClick }) {
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}

export default MenuButton