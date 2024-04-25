import "./Menu.css";
import Toggle from "../Toggle";



function Menu({ children }) {
  return (
    <Toggle>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>

    )
}

export default Menu;
