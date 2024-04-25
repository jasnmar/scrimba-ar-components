import { useState, createContext, useEffect } from "react";

const ToggleContext = createContext();

function Toggle({ children, onToggle }) {
      /**
     * Challenge:
     * 1. Accept `onToggle` as a prop for the Toggle component
     * 2. Using a useEffect, run the function passed to the
     *    onToggle prop anytime the `on` state changes.
     * 3. In Star.js, pass an onToggle prop to the Toggle
     *    component whose value is a function. That function
     *    can just run a console.log for now.
     * Note: There's more we need to do here, you may notice a
     * small bug we'll need to address later.
     */

  const [on, setOn] = useState(false);
  useEffect(() => {
    onToggle()
  },[on])
  
  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  const values = { on, toggle };
  return (
    <>
      <ToggleContext.Provider value={values}>{children}</ToggleContext.Provider>
    </>
  );
}

export default Toggle;
export { ToggleContext };
