import { useState } from "react";
/**
 * Challenge:
 * 1. Pass a parameter called `initialValue` to our custom hook.
 *    Have its default be `false` in case that parameter isn't
 *    provided when useToggle() is called.
 * 2. Initialize state with the `initialValue` parameter
 */
function useToggle(initialValue = false) {

    const [on, setOn] = useState(initialValue);

    function toggle() {
      setOn((prevOn) => !prevOn);
    }
    return [on, toggle]
}

export default useToggle