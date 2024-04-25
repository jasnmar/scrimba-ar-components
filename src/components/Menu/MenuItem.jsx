import "./Menu.css";

function MenuItem({ children }) {
  return (
    <div className="menu-item" key={children}>
      {children}
    </div>
  );
}

export default MenuItem;
