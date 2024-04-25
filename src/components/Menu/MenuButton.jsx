import "./Menu.css";
import Button from "../Button/Button";
import { useContext } from "react";
import { ButtonContext } from "./Menu";

function MenuButton({ children }) {
  const { toggle, open, menuId } = useContext(ButtonContext)
  
  return (
    <Button 
      onClick={toggle} 
      aria-expanded={open} 
      aria-haspopup="true"
      aria-controls={menuId}>
        {children}
      </Button>
  )
}

export default MenuButton;
