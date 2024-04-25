import "./Menu.css";
import Button from "../Button/Button";

function MenuButton({ children, clickHandler }) {
  return <Button onClick={clickHandler}>{children}</Button>;
}

export default MenuButton;
