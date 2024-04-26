import "./Menu.css";
import Toggle from "../Toggle";

function Menu({children, onOpen}) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>

    )
}

export default Menu;
