import { useState, createContext, useEffect, useRef } from "react";
import useEffectOnUpdate from "../../hooks/useEfffectOnUpdate";
import useToggle from "../../hooks/useToggle";

const ToggleContext = createContext();

function Toggle({ children, onToggle = () => {} }) {

  // const [on, setOn] = useState(false);

  // function toggle() {
  //   setOn((prevOn) => !prevOn);
  // }
  const [on, toggle] = useToggle()
  useEffectOnUpdate(() => {
    onToggle()
  },[on])

  const values = { on, toggle };
  return (
    <>
      <ToggleContext.Provider value={values}>{children}</ToggleContext.Provider>
    </>
  );
}

export default Toggle;
export { ToggleContext };
