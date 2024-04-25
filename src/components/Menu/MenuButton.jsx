import "./Menu.css";
import Button from "../Button/Button";
import { useContext } from "react";
import { ButtonContext } from "./Menu";

function MenuButton({ children }) {
  const { toggle } = useContext(ButtonContext)
  return <Button onClick={toggle}>{children}</Button>;
}

export default MenuButton;
