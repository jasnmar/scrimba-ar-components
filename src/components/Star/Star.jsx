import "./Star.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../../hooks/useToggle";

function Star({isOn=false}) {
  const [on, toggle] = useToggle({initialValue: isOn})

  return (
    <div onClick={toggle}>
      {on ? <BsStarFill className="star filled" /> : <BsStar className="star " /> }
    </div>

  );
}

export default Star;
