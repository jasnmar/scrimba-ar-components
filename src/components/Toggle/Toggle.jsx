import { useState, createContext, useEffect, useRef } from "react";

const ToggleContext = createContext();
    /**
     * Challenge: We only want to run onToggle() AFTER the
     * first time rendering the component. We can use refs to
     * track whether or not it's the first time this component
     * is rendering
     * 
     * 1. Create a ref called `firstRender` which defaults to `true`
     *    (Since when we first create the ref, it's true that it
     *    is the first time the component is rendering)
     * 2. In the useEffect, check if your ref's value is `true`.
     *    If it is, set it to `false`. If it isn't... can you figure
     *    it out??
     * Hint: don't forget that your boolean value will be saved
     * under `firstRender.current`, not just `firstRender`!
     */
function Toggle({ children, onToggle = () => {}}) {

  const [on, setOn] = useState(false);
  let firstRender = useRef(true)


  useEffect(() => {

    if(firstRender.current) {
      firstRender.current = false
    } else {
      onToggle()
    }
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
