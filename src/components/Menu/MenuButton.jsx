import "./Menu.css";
import Button from "../Button/Button";

function MenuButton({ children, clickHandler, isOpen }) {
  console.log('MenuButton - clickHandler: ', clickHandler)
  console.log('MenuButton - isOpen: ', isOpen)
  return <Button onClick={clickHandler}>{children}</Button>;
}

export default MenuButton;
