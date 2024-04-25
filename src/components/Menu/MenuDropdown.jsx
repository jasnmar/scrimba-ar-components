import "./Menu.css";
import Toggle from "../Toggle";

function MenuDropdown({ children }) {
  return (
    <Toggle.On>
      <div className="menu-dropdown" aria-hidden={!open}>
        {children}
      </div>
    </Toggle.On>
  );
  
}

export default MenuDropdown;
