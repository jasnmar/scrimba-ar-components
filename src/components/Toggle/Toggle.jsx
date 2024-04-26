import { useState, createContext, useEffect, useRef } from "react";
import useEffectOnUpdate from "../../hooks/useEfffectOnUpdate";

const ToggleContext = createContext();

function Toggle({ children, onToggle = () => {} }) {

  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  useEffectOnUpdate(() => {
    onToggle()
  },[on])
      /**
     * Challenge: use our new, shiny custom hook
     * to set up the effect again. You'll know it's
     * working when the console log runs after clicking
     * the box, but not on the initial render.
     */

  const values = { on, toggle };
  return (
    <>
      <ToggleContext.Provider value={values}>{children}</ToggleContext.Provider>
    </>
  );
}

export default Toggle;
export { ToggleContext };
