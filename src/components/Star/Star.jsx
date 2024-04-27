import "./Star.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../../hooks/useToggle";
import useEffectOnUpdate from "../../hooks/useEfffectOnUpdate";

function Star({isOn=false, onClick = () => {}}) {
  const [on, toggle] = useToggle({initialValue: isOn})
  useEffectOnUpdate(() => onClick(on))
  return (
    <div onClick={toggle}>
      {on ? <BsStarFill className="star filled" /> : <BsStar className="star " /> }
    </div>

  );
}

export default Star;
