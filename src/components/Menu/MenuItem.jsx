import "./Menu.css";

function MenuItem({ children, isOpen, clickHandler }) {
  console.log('MenuItem - clickHandler: ', clickHandler)
  console.log('MenuItem - isOpen: ', isOpen)
  return (
    <div className="menu-item" key={children}>
      {children}
    </div>
  );
}

export default MenuItem;
