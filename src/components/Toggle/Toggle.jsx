import { useState, createContext, useEffect, useRef } from "react";

const ToggleContext = createContext();
function Toggle({ children, onToggle = () => {}}) {

  const [on, setOn] = useState(false);
  



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
