import "./Star.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../../hooks/useToggle";


/**
 * Challenge: Remove all parts of our Toggle component
 * (don't delete the react-icons stars though!) and use 
 * the useToggle hook to conditionally render the stars. 
 * Make sure to add an onClick that runs the `toggle` function
 * you get from useToggle()
 */

function Star() {
  const [on, toggle] = useToggle()

  return (
    <div onClick={toggle}>
      {on ? <BsStarFill className="star filled" /> : <BsStar className="star " /> }
    </div>

  );
}

export default Star;
{/* <Toggle onToggle={onChange}>
<Toggle.Button>
  <Toggle.On>
    <BsStarFill className="star filled" />
  </Toggle.On>
  <Toggle.Off>
    <BsStar className="star " />
  </Toggle.Off>
</Toggle.Button>
</Toggle> */}