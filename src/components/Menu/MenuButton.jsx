import "./Menu.css";
import Button from "../Button/Button";
import Toggle from "../Toggle";

function MenuButton({ children }) {
  
  return (
    <Toggle.Button>
      <Button aria-expanded={open} aria-haspopup="true">
        {children}
      </Button>
    </Toggle.Button>
  );
}

export default MenuButton;
