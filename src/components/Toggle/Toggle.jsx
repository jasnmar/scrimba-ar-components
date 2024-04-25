import { useState, createContext } from "react";

const ToggleContext = createContext();

function Toggle({ children }) {

  const [on, setOn] = useState(true);
  
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
