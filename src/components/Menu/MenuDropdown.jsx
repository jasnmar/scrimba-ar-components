import "./Menu.css";

function MenuDropdown({ children, isOpen, clickHandler }) {
  console.log('MenuDropdown - clickHandler: ', clickHandler)
  console.log('MenuDropdown - isOpen: ', isOpen)
  return isOpen ? <div className="menu-dropdown">{children}</div> : null;
}

export default MenuDropdown;
