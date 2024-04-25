import "./Menu.css";
import React from "react"

function MenuDropdown({ children, isOpen, clickHandler }) {
  console.log('MenuDropdown - clickHandler: ', clickHandler)
  console.log('MenuDropdown - isOpen: ', isOpen)

  return isOpen ? 
    <div className="menu-dropdown">{

      React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          clickHandler: clickHandler, isOpen: open
        })
      })
      }
    </div> : null;
}

export default MenuDropdown;
