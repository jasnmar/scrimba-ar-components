import "./Menu.css";
import Toggle from "../Toggle";
    /**
     * Challenge:
     * 1. Accept `onOpen` as a prop for the Menu component
     * 2. Pass the onOpen prop as the value to Toggle's onToggle prop
     * 3. In index.js, pass an onOpen prop to the Menu
     *    component whose value is a function. 
     *    Just use console.log() for now.
     */


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
