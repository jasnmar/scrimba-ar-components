import "./Menu.css"
import Button from "../Button/Button"

function MenuButton({ buttonText, onClick }) {
    return (
        <Button onClick={onClick}>{buttonText}</Button>
    )
}

export default MenuButton