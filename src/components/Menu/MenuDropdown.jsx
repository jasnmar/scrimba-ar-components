import "./Menu.css";

function MenuDropdown({ children, isOpen }) {
  console.log("isOpen:", isOpen);
  return isOpen ? <div className="menu-dropdown">{children}</div> : null;
}

export default MenuDropdown;
