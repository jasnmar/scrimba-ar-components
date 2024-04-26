import "./Menu.css";
import Button from "../Button/Button";
import { useContext } from "react";
import { MenuContext } from "./Menu";

function MenuButton({ children }) {
  const { toggleOpen } = useContext(MenuContext);
  return (
    <Button onClick={toggleOpen} aria-expanded={open} aria-haspopup="true">
      {children}
    </Button>
  );
}

export default MenuButton;
